document.addEventListener("DOMContentLoaded", function() {

    var madlib = document.createElement('div');
    madlib.innerHTML = 
    
    '<p>The <span class="noun">dog</span> <span class="verb">ran</span> <span class="adverb">quickly</span>.</p>';
    
    document.body.appendChild(madlib);
    
    var output = document.createElement('div');
    output.className = 'output';
    document.body.appendChild(output);
    
    var input = document.createElement('input');
    input.type = 'text';
    document.body.appendChild(input);
    
    var submit = document.createElement('button');
    submit.innerHTML = 'Submit';
    document.body.appendChild(submit);
    
    submit.addEventListener('click', function() {
      var noun = input.value;
      var verb = madlib.querySelector('.verb');
      verb.innerHTML = noun;
    });
    
    input.placeholder = ' verb (past tense)';
    
    submit.addEventListener('click', function() {
      input.value = '';
    });
    
    input.addEventListener('keypress', function(e) {
      if (e.keyCode === 13) {
        submit.click();
      }
    });
    });