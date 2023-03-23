import { useState } from "react";
import axios from "axios";

export const TestOneForm = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
  const [country, setCountry] = useState("");
  const [position, setPosition] = useState("");
  const [wage, setWage] = useState(0);

  const [displayInfo, setDisplayInfo] = useState([]);
  const [newWage, setNewWage] = useState(0);
  const [clearInfo, setClearInfo] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:3001/create", {
        name: name,
        age: age,
        country: country,
        position: position,
        wage: wage,
      })
      .then(() => {
        setDisplayInfo([
          ...displayInfo,
          {
            name: name,
            age: age,
            country: country,
            position: position,
            wage: wage,
          },
        ]);
        // console.log("success");
      });
  };
  const getInfo = (e) => {
    e.preventDefault();
    axios.get("http://localhost:3001/view").then((response) => {
      //   console.log("response");
      setDisplayInfo(response.data);
    });
  };
  const updateInfo = (userid) => {
    // e.preventDefault();
    axios
      .put("http://localhost:3001/update", { wage: newWage, userid: userid })
      .then((response) => {
        // alert("update");
        setDisplayInfo(
          displayInfo.map((val) => {
            return val.userid == userid
              ? {
                  userid: val.userid,
                  name: val.name,
                  age: val.age,
                  country: val.country,
                  position: val.position,
                  wage: newWage,
                }
              : val;
          })
        );
      });
  };
  const deleteInfo = (userid) => {
    // e.preventDefault();
    axios.delete(`http://localhost:3001/delete/${userid}`).then((response) => {
      setDisplayInfo(
        displayInfo.filter((val) => {
          return val.userid != userid;
        })
      );
    });
  };

  return (
    <>
      <form className="justify-content-center">
        <div className="mb-3 w-50">
          <label htmlFor="name" className="form-label">
            Name:
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            onChange={(event) => {
              setName(event.target.value);
            }}
          />
        </div>
        <div className="mb-3 w-50">
          <label for="Age" className="form-label">
            Age:
          </label>
          <input
            type="number"
            className="form-control"
            id="age"
            onChange={(event) => {
              setAge(event.target.value);
            }}
          />
        </div>
        <div className="mb-3 w-50">
          <label for="Country" className="form-label">
            Country:
          </label>
          <input
            type="text"
            className="form-control"
            id="country"
            onChange={(event) => {
              setCountry(event.target.value);
            }}
          />
        </div>
        <div className="mb-3 w-50">
          <label for="Position" className="form-label">
            Position:
          </label>
          <input
            type="text"
            className="form-control"
            id="position"
            onChange={(event) => {
              setPosition(event.target.value);
            }}
          />
        </div>
        <div className="mb-3 w-50">
          <label for="Wage" className="form-label">
            Wage:
          </label>
          <input
            type="number"
            className="form-control"
            id="wage"
            onChange={(event) => {
              setWage(event.target.value);
            }}
          />
        </div>
        <button
          type="submit"
          className="btn btn-primary"
          onClick={handleSubmit}
        >
          Submit
        </button>
      </form>
      <br />
      <div>
        <button className="btn btn-primary" onClick={getInfo}>
          Show Info
        </button>
        {displayInfo.map((val, key) => {
          return (
            <>
              <div className="d-flex">
                <div className="card" style={{ width: "18rem" }}>
                  <div className="card-body">
                    <h5 className="card-title">{val.name}</h5>
                    <p className="card-text">{val.age}</p>
                    <p className="card-text">{val.country}</p>
                    <p className="card-text">{val.position}</p>
                    <p className="card-text">{val.wage}</p>
                    <div>
                      <input
                        type="number"
                        className="form-control"
                        placeholder="2000..."
                        // id="position"
                        onChange={(event) => {
                          setNewWage(event.target.value);
                        }}
                      />
                      <button
                        className="btn btn-primary mt-3"
                        onClick={() => {
                          updateInfo(val.userid);
                        }}
                      >
                        Update
                      </button>
                      <button
                        className="btn btn-primary mt-3"
                        onClick={() => {
                          deleteInfo(val.userid);
                        }}
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};
