const drawX = (tamaño) => {
    for (let i = 0; i < tamaño; i++) {
        let row = "";
        for (let y =0; y < tamaño; y++){
            if (i === y || i === tamaño - y - 1){
                row += "*";
            } else {
                row += " ";
            }
        }
        console.log(row);
    }
}
drawX(5);