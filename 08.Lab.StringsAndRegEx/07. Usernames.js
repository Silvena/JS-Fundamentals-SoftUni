function extractUserName(emails){
    let result = [];
    for(let email of emails){
        let [name,domain]= email.split('@');
        let username = name+'.';
        let domainPart = domain.split('.');
        domainPart.forEach(element => username += element[0]); 
        result.push(username)
    }
    console.log(result.join(', '));
}