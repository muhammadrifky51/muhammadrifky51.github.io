function getParams( paramsName ){
    let params = new URLSearchParams( window.location.search );
    return parameter.get( paramsName )
}