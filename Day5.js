/**Task 01 */
let btn = document.getElementById("btn");

btn.addEventListener("click" , ()=>{ console.log("Button clicked")})

/**Task 02 */
document.addEventListener("DOMContentLoaded", function() {
    const dropdown = document.getElementById('dropdown');
    const options = document.getElementById('dropdownOptions');

    dropdown.addEventListener('click', ()=> {
      options.style.display = options.style.display === 'block' ? 'none' : 'block';
    });

  });


/**Task 03 */

  function changeBG() {
    document.getElementById('mouse').style.backgroundColor = 'red';
  }

  document.getElementById('mouse').addEventListener('mouseenter', changeBG);


/**Task 04 */
    const form = document.getElementById('validation_Form');
    const error = document.getElementById('error');

    form.addEventListener('submit', function(event) {
      event.preventDefault();
      error.innerHTML = '';
      const nameInput = document.getElementById('name');
      const emailInput = document.getElementById('email');

      if (nameInput.value.trim() === '') {
        displayErrorMessage('Name is required.');
      }

      else if (emailInput.value.trim() === '') {
        displayErrorMessage('Email is required.');
      }
    });
    function displayErrorMessage(message) {
      error.innerText = message;
    }



/**Task 05 */

    document.addEventListener('DOMContentLoaded', function() {
        let slideIndex = 0;
        const slides = document.getElementsByClassName('slideshow-image');
        showSlide(slideIndex);
        document.querySelector('.prev').addEventListener('click', function() {
          slideIndex--;
          if (slideIndex < 0) {
            slideIndex = slides.length - 1;
          }
          showSlide(slideIndex);
        });
    
        document.querySelector('.next').addEventListener('click', function() {
          slideIndex++;
          if (slideIndex >= slides.length) {
            slideIndex = 0;
          }
          showSlide(slideIndex);
        });
        function showSlide(index) {
          for (let i = 0; i < slides.length; i++) {
            slides[i].style.display = 'none';
          }
          slides[index].style.display = 'block';
        }
      });

      /**Task Math */
      /**Task 01 */
      console.log("Math");
      console.log("Task 01");
      function base_convert(number, a, b) {
        if (typeof number === 'string') {
            number = parseInt(number, a);
        }
        var result = number.toString(b);
    
        return result;
    }
    
    console.log(base_convert('E164', 16, 8)); 
    console.log(base_convert(1000, 2, 8));   


    /**Task 02 */
    console.log("Task 02");
    function convert_binary(binary) {
        return parseInt(binary,2);
    }
    
    console.log(convert_binary('110011')); 
    console.log(convert_binary('100'));   
    

    /**Task 03 */
    console.log("Task 03")
    function convert_decimal(decimal, base) {
        if (base === 'B') {
            return decimal.toString(2); // Convert to binary
        } else if (base === 'H') {
            return decimal.toString(16); // Convert to hexadecimal
        } else if (base === 'O') {
            return decimal.toString(8); // Convert to octal
        } else {
            return "Invalid base"; 
        }
    }
    
    console.log(convert_decimal(120,'B')); 
    console.log(convert_decimal(120,'H')); 
    console.log(convert_decimal(120,'O'));
    
  /**Task 04 */
  console.log("Task 04")

  function rand(max, min) {
    if (max === undefined) {
        return Math.floor(Math.random() * 101);
    } else if (min === undefined) {
        return Math.floor(Math.random() * (max + 1));
    } else {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }
}

console.log(rand(40, 1)); 
console.log(rand(10));    
console.log(rand());      


/**Task 06 */
console.log("Task 06")
function max(array) {
    if (array.length === 0) {
        return undefined; 
    }
    return Math.max(...array); 
}

console.log(max([10,20,30]));    


/**Task 07 */
console.log("Task 07")
function min(array) {
    if (array.length === 0) {
        return undefined; 
    }
    return Math.min(...array); 
}

console.log(min([10,20,30]));  



    /**Task 21 */
    function intToRoman(num) {
        if (typeof num !== 'number' || num <= 0 || num >= 4000) {
            return "Invalid input"; 
        }
        const romanSymbols = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"];
        const romanValues = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
    
        let result = '';
        for (let i = 0; i < romanValues.length; i++) {
            while (num >= romanValues[i]) {
                result += romanSymbols[i];
                num -= romanValues[i];
            }
        }
    
        return result;
    }
    console.log(intToRoman(20));
    

    /**Array */
    /**Task 01 96*/
    console.log("Array");
    console.log("Task 01");
    function findingArray(input) {
        return Array.isArray(input);
    }
    console.log(findingArray([1, 2,3])); 
    

    /**Task 02 97*/
    console.log("Task 02");

    function array_Clone(arr) {
        return arr.slice(0);
    }
    console.log(array_Clone([1, 2, 3,[1,3]])); 
    
    /**Task 35 98*/
    console.log("Task 35");

    function random_item(arr) {
        return arr[Math.floor(Math.random() * arr.length)];
    }
    console.log(random_item([1,2,3,4,5]));




    /**Task 10 99*/
    /**OOP */
    console.log("OOP");
    console.log("Task 10");
    class product {
        constructor(id, name, price) {
            this.id = id;
            this.name = name;
            this.price = price;
        }
        calculate_price(quantity) {
            let total_Price = this.price * quantity;
            return total_Price;
        }
    }
    
    class PersonalCareProduct extends product {
        constructor(id, name, price, warranty) {
            super(id, name, price);
            this.warranty = warranty; 
        }
        calculate_price(quantity) {
            let basePrice = super.calculate_price(quantity); 
            let total_Price = basePrice + this.warranty;
            return total_Price;
        }
    }
    
    const finalprice = new PersonalCareProduct("101", "Tyre", 5000, 1000);
    console.log(finalprice.calculate_price(5));
    

    /**Task 12 100*/
console.log("Task 12");

class university {
    constructor(uni_name, department = []) { 
      this.uni_name = uni_name;
      this.department = department;
    }
  
    addBranch(depart) {
      this.department.push(depart);
    }
  
    removeBranch(depart) {
      const index = this.department.indexOf(depart);
      if (index !== -1) {
        this.department.splice(index, 1);
      }
    }
  
    displayDepartment()
    {
      console.log("Department of : ", this.uni_name, " are ", this.department);
    }
  }
  
  const university_obj = new university("FAST");
  console.log("Add Department ");
  university_obj.addBranch("FSD");
  university_obj.addBranch("LHR");
  university_obj.addBranch("ISB");
  university_obj.displayDepartment(); 
  console.log("After removing ");
  university_obj.removeBranch("ISB");
  console.log("These are all Department");
  university_obj.displayDepartment(); 