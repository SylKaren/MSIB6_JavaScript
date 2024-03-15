function dataPerson(){
    let forms = document.getElementById('frm');
    let nama = forms.nama.value;  
    let pekerjaan = forms.pekerjaan.value;
    let hobby = forms.hobby.value;

    let hasilDiv = document.getElementById('hasil');
    hasilDiv.innerHTML = "<h2>Data Person:</h2>" + 
                        "<p>Nama: " + nama + "</p>" + 
                        "<p>Pekerjaan: " + pekerjaan + "</p>" + 
                        "<p>Hobby: " + hobby + "</p>";
}