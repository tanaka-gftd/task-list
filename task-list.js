'use strict';

//各HTML要素への参照を取得
const month = document.getElementById('month');
const selectProgress = document.getElementById('select-progress');
const formText = document.getElementById('form-text');
const formTextarea = document.getElementById('form-textarea');
const table = document.getElementById('table');

//N予備校の課題の通り、タスクの保持は配列で行うようにする
let taskList = [];


//タスクを登録する処理
function submitTask(){

    //N予備校の課題の通り、ひとつひとつのタスクの詳細はオブジェクトにて保持する
    const task = { month:month.value, selectProgress:selectProgress.value, formText:formText.value, formTextarea:formTextarea.value };

    //同じタスクを連続で登録できないようにする(課題にはないが、あると便利なので追加)
    if (taskList[taskList.length - 1]){  //念のため、配列taskListが空の時は実施しないようにする
      const sameCheck = taskList[taskList.length - 1];
      if (JSON.stringify(task) === JSON.stringify(sameCheck)) {  //オブジェクトの比較にはコツが必要(今回はJSON化してから比較する)
        return;
      };
    };
    
    //タスクを格納する配列に追加(配列の末尾に追加される)
    taskList.push(task);

    //タスクをテーブルに追加する関数を呼び出す
    createTaskListTable();
};


//タスクをテーブル要素に追加して表示されるようにする関数
//N予備校の課題の通り、登録のたびにタスクリストはいちから表示し直すようにする
function createTaskListTable(){

    //表示し直しのため、現在テーブル表示されているタスク一覧は一旦削除
    //最終行削除を繰り返す
    //(前回表示したものなので、テーブルの行数はひとつ少ない)
    for (let i = 0; i < taskList.length - 1; i++){
      table.deleteRow(-1);
    };

    //タスクをテーブルに表示していく
    for(let i = 0; i < taskList.length; i++){

      //タスク表示用として、テーブルの最後の行の後に新規行(tr要素)を追加し、そこにセル(td要素)も追加していく
      let newRow = table.insertRow(-1);
      let cellMonth = newRow.insertCell(0);
      let cellSelectProgress = newRow.insertCell(1);
      let cellFormText = newRow.insertCell(2);
      let cellFormTextarea = newRow.insertCell(3);

      //テーブルのセル内に値を追加＆表示していく
      cellMonth.appendChild(document.createTextNode(taskList[i].month));
      cellSelectProgress.appendChild(document.createTextNode(taskList[i].selectProgress));
      cellFormText.appendChild(document.createTextNode(taskList[i].formText));
      cellFormTextarea.appendChild(document.createTextNode(taskList[i].formTextarea));
    };
};







