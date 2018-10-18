$("#btnModal").on("click",function(){
    $("#modal-date").modal();
})

$('.jd-date').datepicker({
    format: "dd/mm/yyyy",
    languaje: "es",
    orientation: "auto",
    autoclose: true
});