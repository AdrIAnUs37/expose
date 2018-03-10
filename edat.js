path_usb_test_bin="/dev_usb000/LIC.EDAT";
path_hdd_test_bin="/dev_hdd0/game/NPEB01527/LICDIR/LIC.EDAT";
file_size=65936;

//path_usb_test_bin="/dev_usb000/EP2006-NPEB00226_00-EARTHWROMKEY5723.edat";
//path_hdd_test_bin="/dev_hdd0/home/00000001/exdata/EP2006-NPEB00226_00-EARTHWROMKEY5723.edat";
//file_size=336;

//Preset Chains - Read/Write File Test
function chainSelection2(){
    chain_stackframe = "file_read_write_test";
    setValueToHTML("path_src",path_usb_test_bin);
    setValueToHTML("path_dest",path_hdd_test_bin);
    setValueToHTML("file_size_edit",file_size);
    return chain_stackframe;
}