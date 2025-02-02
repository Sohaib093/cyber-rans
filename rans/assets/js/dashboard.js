function sendKillSignal(machineId){
    Console.log("Sending kill signal to machine ID:",machineId);
    if(confirm("Are you sure you want to send a self-destruct signal to machine Id:" + machineId + "?")){
        $.post("../includes/api/receive_kill_signal.php",{machine_id:machineId})
            .done(function(response){
                var data=JSON.parse(response);
                if(data.success){
                    alert('Self-destruct signal sent successfully to machine ID:',+machineId );
                    location.reload();
                }else{
                    alert('Failed to send self-destructor signal');
                }
            })
            .fail(function(){
                alert('Error sending self-destruct Signal.');
            });
    }
}
$(documen).ready(function(){
    $('#sidebarCollapse').on('click',function(){
        $('#sidebar').toggleClass('active');
    });
});