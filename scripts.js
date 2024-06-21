$(document).ready(function() {
    let punchCount = 0;

    $('#punchButton').on('click', function() {
        punchCount++;
        $('#healthBar').val(100 - punchCount * 20);
        if (punchCount === 5) {
            $('#punchingBag').attr('src', 'images/bag-burst.png');
            $('#punchButton').prop('disabled', true); 
        }
    });

    $('#restartButton').on('click', function() {
        punchCount = 0;
        $('#healthBar').val(100); 
        $('#punchingBag').attr('src', 'images/bag.png');
        $('#punchButton').prop('disabled', false); 
    });
});
