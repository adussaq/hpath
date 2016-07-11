section('Patient Information');

sentence({
    format: '{x} patient is ... ',
    x: ordinal({
        long_name: '',
        short_name: 'Gender',
        states: [off, 'Male', 'Female (Not Pregnant)', 'Female (Pregnant)']
    })
});
sentence({
    format: '{x} patient is ... ',
    x: ordinal({
        long_name: '',
        short_name: 'Gender',
        states: [off, 'Male', 'Female (Not Pregnant)', 'Female (Pregnant)']
    })
});
