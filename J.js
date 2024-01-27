function showPopup() {
    document.getElementById('userPopup').style.display = 'flex';
  }

  function hidePopup() {
    document.getElementById('userPopup').style.display = 'none';
  }

  function showSubcategory() {
    const category = document.getElementById('category').value;
    const subcategoryContainer = document.getElementById('subcategoryContainer');

    if (category === 'student') {
      subcategoryContainer.style.display = 'block';
      const subcategorySelect = document.getElementById('subcategory');
      subcategorySelect.innerHTML = '<option value="10th">10th</option><option value="12th">12th</option><option value="graduation">Graduation</option><option value="postgraduation">Post Graduation</option>';
    } else if (category === 'job') {
      subcategoryContainer.style.display = 'block';
      const subcategorySelect = document.getElementById('subcategory');
      subcategorySelect.innerHTML = '<option value="it">IT</option><option value="govt">Government</option><option value="others">Others</option>';
    } else {
      subcategoryContainer.style.display = 'none';
    }
  }

  function addUser(event) {
    event.preventDefault();

    const fname = document.getElementById('fname').value;
    const mname = document.getElementById('mname').value;
    const lname = document.getElementById('lname').value;
    const gender = document.querySelector('input[name="gender"]:checked').value;
    const mno = document.getElementById('mno').value;
    const email = document.getElementById('email').value;
    const category = document.getElementById('category').value;
}