# chatwork-no-badges

## chatwork-no-badges とは?

指定したルームの未読バッヂを非表示にします。

![image](https://i.imgur.com/9dVT5dg.jpg)

ただし，TOが付いた場合は表示をします。

![image](https://i.imgur.com/Pslg3U0.jpg)

## Chromeの拡張機能への追加方法

1. https://github.com/shyazusa/chatwork-no-badges にアクセスします
1. 緑色の `Clone or download` をクリックします
1. 右側の `Download ZIP` ボタンをクリックします
    - ![image](https://user-images.githubusercontent.com/10899437/46986394-00f9c280-d12a-11e8-91c8-d31bb5ed6524.png)
    - Gitについて詳しい方は `git clone` して頂いても構いません
1. ダウンロードしたZIPファイルを好きなディレクトリに解凍します
1. chrome://extensions/ にアクセスします
1. デベロッパーモードをオンにします
1. `パッケージ化されていない拡張機能を読み込む` をクリックします
    - ![image](https://user-images.githubusercontent.com/10899437/46986308-88930180-d129-11e8-89d4-42608f9b799b.png)
1. 解凍したディレクトリを指定します

## 使い方

1. 追加したアドオンのアイコンをクリックします
1. `オプション` をクリックします
    - ![image](https://user-images.githubusercontent.com/10899437/46986631-669a7e80-d12b-11e8-8df4-2d1e9f1ce3bc.png)
1. 入力欄に未読バッヂを表示したくないチャットルームの `room-id` を入力します
    - ![image](https://user-images.githubusercontent.com/10899437/46986896-ab72e500-d12c-11e8-8e9c-8a9e7efe8420.png)
    - `room-id` とは，チャットワークのルームに入った時のURL， `https://www.chatwork.com/#!rid00000000` の，0の数字の部分です
1. 青い `Add` ボタンで入力欄を追加します
    - 好きなだけ非表示にしたい部屋を追加します
    - 1個1個の入力が面倒な人や，全ての部屋のTOのない部屋の未読バッヂを非表示にしたい方は `All Rooms` にチェックを入れて下さい
1. 緑色の `Save` ボタンをクリックして現在の非表示ルームリストを保存します
1. チャットワークを開きます
    - もしも既に開いている場合は，ページリロードを行います
