function showFileSize() {
    let fileName = document.getElementById('fileinput').files[0].name;
    let fileSize = document.getElementById('fileinput').files[0].size;
    let fileType = document.getElementById('fileinput').files[0].type;
    let fileModifiedDate = document.getElementById('fileinput').files[0].lastModifiedDate;

    let file_info = fileName+"</br>"+fileSize+"</br>"+fileType+"</br>"+fileModifiedDate;
    document.getElementById("output").innerHTML = file_info
  }