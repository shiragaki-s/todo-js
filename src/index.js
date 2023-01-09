import "./styles.css";

const onClickAdd = () => {
  //テキストボックスの値を取得し、初期化する
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";
  createIncompleteList(inputText);
};

//未完了リストから指定の要素を削除
const deleteFromIncompleteList = (target) => {
  document.getElementById("incomplete-list").removeChild(target);
};

//未完了リストに追加する関数
const createIncompleteList = (text) => {
  //div生成
  const div = document.createElement("div");
  div.className = "list-row";
  //console.log(div);

  //li生成
  const li = document.createElement("li");
  li.innerText = text;

  //botton作成
  const cbutton = document.createElement("button");
  cbutton.innerText = "完了";
  //console.log(cbutton);
  cbutton.addEventListener("click", () => {
    //押された完了ボタンのおやタグ(div)を完了リストから削除
    deleteFromIncompleteList(cbutton.parentNode);

    //完了リストに追加する要素
    const addTarget = cbutton.parentNode;

    //TODO内容テキストを取得
    const text = addTarget.firstElementChild.innerText;

    //div以下を初期化
    addTarget.textContent = null;

    //li生成
    const li = document.createElement("li");
    li.innerText = text;

    //botton作成
    const bbutton = document.createElement("button");
    bbutton.innerText = "戻す";
    bbutton.addEventListener("click", () => {
      //押された戻すボタンの親タグ(div)を完了リストから削除
      const deleteTarget = bbutton.parentNode;
      document.getElementById("complete-list").removeChild(deleteTarget);

      //テキスト取得
      const text = bbutton.parentNode.firstElementChild.innerText;
      createIncompleteList(text);
    });

    //divタグの子要素に各要素を入れる
    addTarget.appendChild(li);
    addTarget.appendChild(bbutton);

    //完了リストに追加
    document.getElementById("complete-list").appendChild(addTarget);
  });

  //botton作成
  const dbutton = document.createElement("button");
  dbutton.innerText = "削除";
  dbutton.addEventListener("click", () => {
    //押された完了ボタンのおやタグ(div)を完了リストから削除
    deleteFromIncompleteList(dbutton.parentNode);
    //const deleteTarget = dbutton.parentNode;
    // console.log(deleteTarget)
    //document.getElementById("incomplete-list").removeChild(deleteTarget);
  });
  //console.log(dbutton);

  //divタグの子要素に各要素を設定
  div.appendChild(li);
  div.appendChild(cbutton);
  div.appendChild(dbutton);

  //未完了のリストに追加
  document.getElementById("incomplete-list").appendChild(div);
};

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
