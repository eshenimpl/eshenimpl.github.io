const generateJournal = (e) => {
  //   e.preventDefault();
  getProjectData();
  alert("12");
};

const getProjectData = async () => {
  try {
    alert("test");
    console.log("consoletest");
    const res = await fetch("http://localhost:8888/journals");
    const newData = await res.json();
    if (newData) {
      console.log(newData);
    } else {
      alert("no data");
    }
  } catch (e) {
    console.log(e);
    console.log("Error occurred when getting data from server");
  }
};

document.getElementById("generate").addEventListener("click", generateJournal);
