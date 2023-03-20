'use strict';

//各HTML要素への参照を取得
const month = document.getElementById('month');
const selectProgress = document.getElementById('select-progress');
const formText = document.getElementById('form-text');
const formTextarea = document.getElementById('form-textarea');
const table = document.getElementById('table');

//N予備校の課題の通り、タスクの保持は配列にて行うようにする
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
function createTaskListTable(){

    //タスク表示用としてテーブルに新規行(tr要素)を追加し、そこにセル(td要素)も追加していく
    let newRow = table.insertRow(-1);
    let cellMonth = newRow.insertCell(0);
    let cellSelectProgress = newRow.insertCell(1);
    let cellFormText = newRow.insertCell(2);
    let cellFormTextarea = newRow.insertCell(3);

    //登録したタスクはtaskList配列の末尾に追加されているので、末尾のデータをテーブルに追加していく
    if (taskList[taskList.length - 1]) {
      cellMonth.appendChild(document.createTextNode(taskList[taskList.length - 1].month));
      cellSelectProgress.appendChild(document.createTextNode(taskList[taskList.length - 1].selectProgress));
      cellFormText.appendChild(document.createTextNode(taskList[taskList.length - 1].formText));
      cellFormTextarea.appendChild(document.createTextNode(taskList[taskList.length - 1].formTextarea));
    };
};







