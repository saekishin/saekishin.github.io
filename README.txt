githubでページを公開する方法

githubでリポジトリ作成
⇒ユーザ名.github.ioとする

※ローカルでファイル作成する場合の方法

$ git init
//管理対象にしたいディレクトリに移動

$ git clone https://github.com/username/username.github.io
//git remoteするだけでもいいのでは？

$ cd username.github.io
//対象ディレクトリに移動

適当なファイル作成
mkdir index.html

$ git add . 

$ git commit -m "message"

$ git remote add origin https://github.com/username/username.github.io
//pushの送信先を指定

$ git push -u origin master
//-uは必要なのか？

これでファイルが送信できたはず

webページを確認するには
https://username.github.io
へアクセス

ちゃんとページが表示されたでしょうか？

※ファイルをを更新する方法
$ git init
$ git clone
$ git remote
$ git add .
$ git commit -m "message"
$ git push -u origin master

※クローンした後でgithub上でファイルメンテするとコンフリクト発生？し
プッシュを受け付けなくなるので注意
⇒githubでファイル編集した後に、クローンしてローカルで編集して、プッシュしてください。

※プッシュした後、ローカルのファイルは削除する

再度やってみたので
$ git clone URL(https://github.com/username/username.github.io.git)
$ cd クローンしたディレクトリ
色々ファイルメンテ
$ git add .
$ git commit -m "message"
$ git remote add URL(https://github.com/username/username.github.io)
$ git push -u origin master


