function openPop() {
    var newWin = window.open("/popup-result.html","","width=400, height=400");
    if (newWin == null) {
        alert("팝업 차단됐다... 차단 해제하고 새로고침ㄱ..")
    }
}

window.onload = openPop;