let frm = document.getElementById('data');
let jabatanPegawai = ["Manager", "Asisten Manager", "Staff"];
let statusPegawai = ["Menikah", "Belum Menikah"];

let pilihJabatan = `<option value="">--- Pilih Jabatan ---</option>`;
let pilihStatus = `<option value="">--- Status Anda ---</option>`;

for (let p in jabatanPegawai){
    pilihJabatan += `<option value="${jabatanPegawai[p]}">${jabatanPegawai[p]}</option>`;
}
for (let s in statusPegawai){
    pilihStatus += `<option value="${statusPegawai[s]}">${statusPegawai[s]}</option>`;
}

frm.jabatan.innerHTML = pilihJabatan;
frm.status.innerHTML = pilihStatus;
function gaji(){
    let nama = frm.nama.value;
    let jabatan = frm.jabatan.value;
    let status = frm.status.value;
    
    let gapok;

    switch(jabatan){
        case "Manager" : gapok = 15000000; break;
        case "Asisten Manager" : gapok = 10000000; break;
        case "Staff" : gapok = 5000000; break;
        default: gapok = 0;
    }
    
    let tunjangan = 0.15 * gapok;
    let bpjs = 0.1 * gapok;
    //ternary
    let keluarga = (status == "Menikah") ? 0.2 * gapok : 0;
    let total = gapok + tunjangan + bpjs + keluarga;

    swal.fire({
        html :`
        <h2 align='center'>Data Pegawai</h2>
        <table border='1' align='center'>
            <thead>
                <tr>
                    <th>Data Pegawai</th>
                    <th>Jabatan</th>
                    <th>Status</th>
                    <th>Tunjangan</th>
                    <th>BPJS</th>
                    <th>Tunjangan Keluarga</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>${nama}</td>
                    <td>${jabatan}</td>
                    <td>${status}</td>
                    <td>${tunjangan}</td>
                    <td>${bpjs}</td>
                    <td>${keluarga}</td>
                </tr>
            </tbody>
            <tfoot>
                <tr>
                    <td colspan='5'>Total Gaji</td>
                    <td>${total}</td>
                </tr>
            </tfoot>
        </table>
    `,});
}

