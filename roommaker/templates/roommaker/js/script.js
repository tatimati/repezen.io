$(document).ready(function () {

    //ユーザ情報の変数
    var __User = {};

    //匿名でユーザ認証を行う
    firebase.auth().signInAnonymously().catch(function (error) {
        var errorCode = error.code;
        var errorMessage = error.message;
    });

    //ユーザ情報を取得する
    firebase.auth().onAuthStateChanged(function (user) {
        if (user) { //User情報が取得できた場合
            __User.isAnonymous = user.isAnonymous;
            __User.uid = user.uid;

        } else { //ログアウト時

        }
    });

    var input_message = $("#input-message");
    var btn_submit = $("#btn-submit");


    //[送る]ボタンを押したときのイベント設定
    btn_submit.on("click", function () {
        //テキストボックスに入力されているデータを取得
        var message_data = input_message.val();

        //入力されているデータがある場合送る
        if (message_data.length > 0) {
            sendMessage(__User.uid, message_data);
        }
    });


    function sendMessage(uid, message) {

        //送りたいデータ
        var data = {
            "uid": uid,//ユーザID
            "message": message//メッセージ
        };

        //新しいIDを取得します
        var newMessageKey = firebase.database().ref().child('messages').push().key;

        //messagesにデータを保存します
        return firebase.database().ref("/messages/" + newMessageKey).update(data).then(
            //送信成功時の処理
            function () {
                console.log("メッセージを送信しました。");
            },
            //送信失敗時の処理
            function (error) {
                console.log("送信に失敗しました");
            }
        );
    }
});

//メッセージを表示するエリア
var message_area = $("#area-message");

//データベースに変更があった場合変更分を表示エリアに描画する
firebase.database().ref('/messages/').on('child_added', function(snapshot) {
    var data = snapshot.val();
    message_area.append('<p>' + data['message'] + '</p>');
});
