const email='sadat@gmail.com';
const password='sadat123';

document.getElementById('btn-submit').addEventListener('click', function(){
    let getEmail=document.getElementById('user-email').value;
    let getPass=document.getElementById('user-pass').value;
    
    if(email==getEmail && password==getPass){
        window.location.href='bank.html'
    }
    else{
        alert('Provide Correct Mail and Password');
    }
})