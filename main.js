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
//上の代数startに対し「clickした場合のイベントリスナを設定している　⇒対象オブジェクト.addEventListner(イベントの条件、function)
start.addEventListener('click', function() {
//ここにイベントの処理を記述する
//
  starTime = Date.now();

});

stop.addEventListener('click', function() {
  
});
  
  
  
  
  
})();
