DEFINE FUNCTION OVERWRITE fn::log($label: string, $value: any) {

function($label, $value) {
    const [label, value] = arguments;
    console.log(label, value);
}

} PERMISSIONS FULL;