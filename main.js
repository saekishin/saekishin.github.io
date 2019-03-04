//

(function() {
//↓エラーチェックをするために記述しとく
  'use strict';

//documentのidがstartのオブジェクトを取得する
  var start = document.getElementById('start');
  var stop = document.getElementById('stop');
  var result = document.getElementById('result');
  
//クリックしたときの時間を取得するための変数
  var startTime;
  
  var diff;
//上の代数startに対し「clickした場合のイベントリスナを設定している　⇒対象オブジェクト.addEventListner(イベントの条件、function)
start.addEventListener('click', function() {
//ここにイベントの処理を記述する
//時間はDate.nowでしゅとくする
  startTime = Date.now();

});

stop.addEventListener('click', function() {
//経過時間を取得する
  var elapsedTime;
//ミリ秒なので、1000で割り算する
  elapsedTime = (Date.now() - startTime) / 1000;

  
  //上で宣言した変数resultに対し、elapsedTime1を投入（toFixedで小数点～桁まで表示させる）
  result.textContent = elapsedTime.toFixed(3);
//target
  diff = elapsedTime - 5.0;
//差が1秒以内の場合の判定を設定
//Math.absで絶対値の表示を行う。
//if (diff > -1 && diff <1) {
  if (Math.abs(diff) < 1.0) {
//オブジェクトのクラス名の操作…classNameに代入
    result.className = 'perfect';
    
  }
  
});
  
})();
