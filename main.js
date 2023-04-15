const form = document.getElementById('form-expense');
const expenseList = document.getElementById('expense-list');

// Get the existing expenses from localStorage or initialize empty arrays
const textExpenses = JSON.parse(localStorage.getItem('text-expenses')) || [];
const valueExpenses = JSON.parse(localStorage.getItem('value-expenses')) || [];

console.log(textExpenses,valueExpenses);

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const expenseText = document.querySelector('input[name="text-input"]');
  const expenseValue = document.querySelector('input[name="text-expense"]');

  // Create the DOM elements for the new expense
  const newExpense = document.createElement('li');
  const newText = document.createElement('span');
    newText.textContent = expenseText.value;
  const newValue = document.createElement('span');
    newValue.textContent = expenseValue.value;

  //Buttons container and elements
  const buttonsContainer = document.createElement('div');
    buttonsContainer.classList.add('btn--container');
  const removeButton = document.createElement('button');
    removeButton.className = 'btn--remove';
    removeButton.textContent = 'X';
    buttonsContainer.appendChild(removeButton);
  const completeButton = document.createElement('button');
    completeButton.className = 'btn--complete';
    completeButton.textContent = '\u2713';
    buttonsContainer.appendChild(completeButton);

// Add the new expense to the DOM
    newExpense.appendChild(newText);
    newExpense.appendChild(newValue);
    newExpense.appendChild(buttonsContainer);
    expenseList.appendChild(newExpense);

  // Update the arrays of expenses in localStorage
  textExpenses.push(expenseText.value);
  valueExpenses.push(expenseValue.value);
  localStorage.setItem('text-expenses', JSON.stringify(textExpenses));
  localStorage.setItem('value-expenses', JSON.stringify(valueExpenses));

    const buttonCompletion=document.querySelectorAll('.btn--complete');
    
    buttonCompletion.forEach((button)=>{
        button.addEventListener('submit', (event)=>{
            const fadeAway=event.target.parentElement.parentElement;
            fadeAway.classList.add('fade--complete');
            setTimeout(()=>{
                fadeAway.remove();
                textExpenses.splice(textExpenses.indexOf(expenseText.value), 1);
                valueExpenses.splice(valueExpenses.indexOf(valueExpenses.value),1);
                localStorage.setItem('text-expenses', JSON.stringify(textExpenses));
                localStorage.setItem('value-expenses', JSON.stringify(valueExpenses));
                console.log(textExpenses,valueExpenses)

            },500);

            
        });
    });

    const buttonRemove=document.querySelectorAll('.btn--remove');
    
    buttonRemove.forEach((button)=>{
        button.addEventListener('submit', (event)=>{
            const fadeAway=event.target.parentElement.parentElement;
            fadeAway.classList.add('fade--remove');
            setTimeout(()=>{
                fadeAway.remove();
                textExpenses.splice(textExpenses.indexOf(expenseText.value), 1);
                valueExpenses.splice(valueExpenses.indexOf(valueExpenses.value),1);
                localStorage.setItem('text-expenses', JSON.stringify(textExpenses));
                localStorage.setItem('value-expenses', JSON.stringify(valueExpenses));
                console.log(textExpenses,valueExpenses)
                
            },500);
            
        });
    });
});

    



//Refreshing the data on page load

window.addEventListener('load', () => {
    // Get the existing expenses from localStorage or initialize empty arrays
    const textExpenses = JSON.parse(localStorage.getItem('text-expenses')) || [];
    const valueExpenses = JSON.parse(localStorage.getItem('value-expenses')) || [];
  
    // Create DOM elements for each saved expense and append them to the expenseList
    for (let i = 0; i < textExpenses.length; i++) {
      const newExpense = document.createElement('li');
      const newText = document.createElement('span');
        newText.textContent = textExpenses[i];
      const newValue = document.createElement('span');
        newValue.textContent = valueExpenses[i];
  
      //Buttons container and elements
      const buttonsContainer = document.createElement('div');
        buttonsContainer.classList.add('btn--container');
      const removeButton = document.createElement('button');
        removeButton.className = 'btn--remove';
        removeButton.textContent = 'X';
        buttonsContainer.appendChild(removeButton); 
      const completeButton = document.createElement('button');
        completeButton.className = 'btn--complete';
        completeButton.textContent = '\u2713';
        buttonsContainer.appendChild(completeButton);
  
      newExpense.appendChild(newText);
      newExpense.appendChild(newValue);
      newExpense.appendChild(buttonsContainer);
      expenseList.appendChild(newExpense);
  
      // Add event listeners to the remove and complete buttons of each expense
      const buttonCompletion=document.querySelectorAll('.btn--complete');
      buttonCompletion.forEach((button)=>{
      button.addEventListener('click', () => {
        newExpense.classList.add('fade--complete');
        setTimeout(() => {
            
            newExpense.remove();
            textExpenses.splice(i, 1);
            valueExpenses.splice(i, 1);
            localStorage.setItem('text-expenses', JSON.stringify(textExpenses));
            localStorage.setItem('value-expenses', JSON.stringify(valueExpenses));
            console.log(textExpenses,valueExpenses)
          }, 500);

      });
    });

    const buttonRemove=document.querySelectorAll('.btn--remove');
    buttonRemove.forEach((button)=>{
      button.addEventListener('click', () => {
          newExpense.classList.add('fade--remove');
          setTimeout(() => {
              newExpense.remove();
              textExpenses.splice(i, 1);
              valueExpenses.splice(i, 1);
              localStorage.setItem('text-expenses', JSON.stringify(textExpenses));
              localStorage.setItem('value-expenses', JSON.stringify(valueExpenses));
              console.log(textExpenses,valueExpenses)
          }, 500);
        });
    })

    console.log(textExpenses,valueExpenses);
  }
});