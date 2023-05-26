import React, { useState } from "react";
import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  PDFDownloadLink,
  Image,
  Line
} from "@react-pdf/renderer";
import { v4 as uuidv4 } from "uuid";
import "./index.css";

const Resume4 = () => {
  const [name, setName] = useState("");
  const [jobTitle, setJobTitle] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");
  const [webUrl, setWebUrl] = useState("");
  const [address, setAddress] = useState("");
  const [colleges, setColleges] = useState([]);
  const [clubs, setClubs] = useState([]);
  const [skill, setSkill] = useState("");
  const [skillList, setSkillList] = useState([]);
  const [profilePic, setProfilePic] = useState();
  const [companies, setCompanies] = useState([]);
  const [ProExp, setProExp] = useState("");
  const [reference, setReference] = useState("");
  const [referencesList, setReferencesList] = useState([]);

  const styles = StyleSheet.create({
    topSection: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-evenly",
      alignItems: "center",
      backgroundColor: "#212A3E",
      height: "125px",
      borderTopWidth: 5,
      borderTopStyle: "solid",
      borderTopColor: "#F9F54B",
      width: "100vw"
    },
    circle1: {
      backgroundColor: "#FFFFFF",
      width: 45,
      height: 45,
      borderRadius: 100
    },
    circle2: {
      backgroundColor: "#F9F54B",
      height: 70,
      width: 70,
      borderRadius: 100
    },
    container: {
      
      marginBottom: -70
    },
    userInfo: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center"
    },
    dots: {
      color: "#FC4F00",
      fontSize: 85,
      marginTop: -48,
      borderRadius: 85
    },
    contactImg: {
      color: "#F9F54B"
    },
    year: {
      backgroundColor: "#F9F54B",
      borderRadius: 100,
      height: 55,
      width: 55,
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      color: "#ffffff",
      fontWeight: "bold"
    },
    page: {
      display: "flex",
      flexDirection: "column",
      backgroundColor: "white",
      padding: 0,
      fontFamily: "Helvetica",
      fontSize: 12
    },
    line: {
      marginTop: 3,
      marginBottom: 10,
      borderBottomWidth: 1,
      borderBottomColor: "#3D3733",
      marginLeft: 20,
      marginRight: 10
    },

    title: {
      color: "#212A3E",
      fontWeight: "bold",
      fontFamily: "Helvetica",
      marginLeft: 20,
      marginTop: 20,
      fontSize: 16,
      marginBottom: 5,
      marginRight: 40
    },
    title123: {
      color: "#212A3E",
      fontWeight: "bold",
      fontFamily: "Helvetica",
      marginLeft: 20,
      marginTop: 60,
      fontSize: 16,
      marginBottom: 5,
      marginRight: 40
    },

    subTitle: {
      color: "#3D3733",
      fontWeight: 700,
      fontFamily: "Helvetica",
      marginLeft: 20,
      fontSize: 12,
      marginBottom: 0,
      marginRight: 40
    },
    experiences: {
      color: "#3D3733",
      fontWeight: 900,
      fontFamily: "Helvetica",
      marginLeft: 20,
      fontSize: 12,
      marginBottom: 0,
      marginRight: 40,
      marginTop: 5
    },
    name: {
      color: "#FFFFFF",
      fontSize: 25,
      fontWeight: 1000,
      marginBottom: 20
    },
    jobtitle: {
      fontSize: 20,
      textAlign: "center",
      color: "#FFD93D",
      marginTop: -10,
      marginLeft: -12,
      fontStyle: "italic"
    },
    leftSection: {
      margin: 0,
      padding: 10,
      width: "40vw",
      minHeight: "82vh",
      borderRightColor: "#F9F54B",
      borderRightWidth: "1",
      borderRightStyle: "solid"
    },
    rightSection: {
      margin: 0,
      padding: 10,
      width: "60vw"
    },
    heading: {
      fontSize: 18,
      fontWeight: 1000,
      marginBottom: 10
    },
    label: {
      fontWeight: 700,
      marginBottom: 5,
      padding: 5,
      marginLeft: 20,
      color: "#3D3733",
      display: "flex",
      justifyContent: "center",
      alignItems: "center"
    },
    responseLabel: {
      fontWeight: 700,
      marginBottom: 5,
      marginTop: 5,
      padding: 5,
      marginLeft: 13,
      color: "#3D3733"
    },
    value: {
      marginBottom: 10
    },

    listItem: {
      marginLeft: 15,
      marginBottom: 10,
      marginTop:-60
    },
    duration: {
      color: "#3D3733",
      fontWeight: 400,
      marginLeft: 20,
      fontSize: 12,
      marginTop: 5,
      marginBottom: 0,
      marginRight: 40
    }
  });

  const handleFileInputChange = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setProfilePic(reader.result);
    };
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const college = {
      id: uuidv4(),
      name: event.target.collegeName.value,
      studied: event.target.studiedField.value,
      startDate: event.target.startDate.value,
      endDate: event.target.endDate.value,
      grade: event.target.grade.value
    };
    setColleges([...colleges, college]);
    event.target.reset();
  };

  const handleClubSubmit = (event) => {
    event.preventDefault();
    const club = {
      id: uuidv4(),
      name: event.target.clubName.value,
      startDate: event.target.startDate1.value,
      endDate: event.target.endDate1.value
    };
    setClubs([...clubs, club]);
    event.target.reset();
  };

  const handleWorkExpSubmit = (event) => {
    event.preventDefault();
    const company = {
      id: uuidv4(),
      companyName: event.target.companyName.value,
      role: event.target.role.value,
      startJobDate: event.target.startJobDate.value,
      response: event.target.response.value
    };
    setCompanies([...companies, company]);
    event.target.reset();
  };
  const handleReferences = (event) => {
    setReferencesList([...referencesList, reference]);
    setReference("");
  };

  const handleAddSkill = (event) => {
    setSkillList([...skillList, skill.toUpperCase()]);
    setSkill("");
  };

  const generatePDF = () => {
    const MyDocument = () => (
      <Document>
        <Page size="A4" style={styles.page}>
          <View style={styles.topSection}>
            <View style={styles.circle1}></View>
            <View style={styles.circle2}></View>
            <View>
              <Image
                src={profilePic}
                alt="profilepic"
                style={{
                  width: 100,
                  height: 100,
                  borderRadius: 300,
                  borderWidth: 2,
                  borderColor: "#3C84AB",
                  borderStyle: "solid"
                }}
              />
            </View>
            <View style={styles.userInfo}>
              <Text style={styles.name}>{name.toUpperCase()}</Text>
              <Text style={styles.jobtitle}>{jobTitle.toUpperCase()}</Text>
            </View>
          </View>
          <View style={{ display: "flex", flexDirection: "row" }}>
            <View style={styles.leftSection}>
              <Text style={styles.title}>EDUCATION</Text>
              <Line style={styles.line} />
              <View>
                {colleges.map((item, index) => (
                  <>
                    <Text key={index} style={styles.subTitle}>
                      {item.name}, {item.startDate} to {item.endDate}
                    </Text>
                    <Text key={index} style={styles.responseLabel}>
                      Field of Study: {item.studied}
                    </Text>
                  </>
                ))}{" "}
              </View>
              <Text style={styles.title}>REFERENCES</Text>
              <Line style={styles.line} />
              <View style={styles.container}>
                {referencesList.map((item, index) => (
                  <Text key={index} style={styles.listItem}>
                    <Text style={styles.dots}>..</Text> {item}
                  </Text>
                ))}
              </View>
              <Text style={styles.title123}>SKILLS & EXPERTISE</Text>
              <Line style={styles.line} />
              <View style={styles.container}>
                {skillList.map((item, index) => (
                  <Text key={index} style={styles.listItem}>
                    <Text style={styles.dots}>..</Text>
                    {item}
                  </Text>
                ))}
              </View>
            </View>
            <View style={styles.rightSection}>
              <Text style={styles.title}>CLUBS & ASSOCIATIONS</Text>
              <Line style={styles.line} />
              <View>
                {clubs.map((item, index) => (
                  <>
                    <Text key={index} style={styles.subTitle}>
                      {item.startDate.slice(0, 4)} - {item.endDate.slice(0, 4)}
                      {"    "}
                      {item.name}
                    </Text>
                  </>
                ))}{" "}
              </View>
              <Text style={styles.title}>CO-OP PLACEMENT EXPERIENCE</Text>
              <Line style={styles.line} />
              <View>
                {companies.map((item, index) => (
                  <>
                    <View style={{ flexDirection: "row", marginBottom: 2 }}>
                      <View key={item.id} style={styles.year}>
                        <Text style={{ color: "#FFFFFF" }}>
                          {item.startJobDate.slice(0, 4)}
                        </Text>
                      </View>
                      <View style={{ flexDirection: "column", marginTop: 10 }}>
                        <Text key={item.id} style={styles.experiences}>
                          {item.companyName} | {item.role}
                        </Text>
                        <Text
                          key={index}
                          style={{
                            fontWeight: 700,
                            marginBottom: 5,
                            marginTop: 5,
                            marginLeft: 15,
                            color: "#3D3733"
                          }}
                        >
                          {item.response}
                        </Text>
                      </View>
                    </View>
                  </>
                ))}
              </View>
              <Text style={styles.title}>CONTACT</Text>
              <Line style={styles.line} />
              <Text style={styles.label}>
                {" "}
                <Image
                  style={styles.contactImg}
                  src="https://res.cloudinary.com/dg0telgxq/image/upload/v1683785531/telephone_a5e59v.png"
                />{" "}
                {contact}
              </Text>
              <Text style={styles.label}>
                {" "}
                <Image
                  style={styles.contactImg}
                  src="https://res.cloudinary.com/dg0telgxq/image/upload/v1683786020/email_ciquoy.png"
                />{" "}
                {email}
              </Text>
              <Text style={styles.label}>
                {" "}
                <Image
                  style={styles.contactImg}
                  src="https://res.cloudinary.com/dg0telgxq/image/upload/v1683786019/web_ny78qp.png"
                />{" "}
                {webUrl}
              </Text>
              <Text style={styles.label}>
                {" "}
                <Image
                  style={styles.contactImg}
                  src="https://res.cloudinary.com/dg0telgxq/image/upload/v1683786019/home_syxdan.png"
                />{" "}
                {address}
              </Text>
            </View>
          </View>
        </Page>
      </Document>
    );

    return (
      <button className="download_btn" style={{ marginLeft: "-2px" }}>
        <PDFDownloadLink
          className="download_link"
          document={<MyDocument />}
          fileName="resume.pdf"
        >
          {({ blob, url, loading, error }) => "Download PDF"}
        </PDFDownloadLink>
      </button>
    );
  };

  return (
    <>
      <div className="bg-container">
        <div className="form-container">
          <h1 className="main-img-tag">
            Get Your Customized Resume PDF: Fill Out the Form Below
          </h1>
          <label className="input-label">
            Profile Picture:
            <input
              type="file"
              name="profilePic"
              accept="image/*"
              onChange={handleFileInputChange}
            />
          </label>
          <div className="entire-details">
            <div className="basic-details">
              <h1 style={{ marginBottom: "-50px" }} className="main-img-tag">
                Basic Details{" "}
              </h1>
              <label className="input-label" htmlFor="username">
                Name:
              </label>
              <input
                id="username"
                className="username-input-field"
                value={name}
                placeholder="Name"
                type="text"
                onChange={(e) => setName(e.target.value)}
              />

              <label
                style={{ marginTop: "-27px" }}
                className="input-label"
                htmlFor="job-title"
              >
                Job Title:
              </label>

              <input
                id="job-title"
                className="username-input-field"
                value={jobTitle}
                placeholder="Job Title"
                type="text"
                onChange={(e) => setJobTitle(e.target.value)}
              />
              <label
                style={{ marginTop: "-27px" }}
                className="input-label"
                htmlFor="email"
              >
                Email:
              </label>
              <input
                id="email"
                className="username-input-field"
                value={email}
                placeholder="Email"
                type="email"
                onChange={(e) => setEmail(e.target.value)}
              />
              <label
                style={{ marginTop: "-27px" }}
                className="input-label"
                htmlFor="contact"
              >
                Contact No:
              </label>
              <input
                id="contact"
                className="username-input-field"
                value={contact}
                placeholder="Contact Number"
                type="tel"
                onChange={(e) => setContact(e.target.value)}
              />

              <label
                style={{ marginTop: "-27px" }}
                className="input-label"
                htmlFor="web"
              >
                Web Url:
              </label>
              <input
                id="web"
                className="username-input-field"
                value={webUrl}
                placeholder="Web URL"
                type="tel"
                onChange={(e) => setWebUrl(e.target.value)}
              />

              <label
                style={{ marginTop: "-27px" }}
                className="input-label"
                htmlFor="address"
              >
                Address
              </label>
              <textarea
                id="address"
                className="username-input-field"
                value={address}
                placeholder="Address"
                type="textarea"
                onChange={(e) => setAddress(e.target.value)}
                min-height="100px"
              />
            </div>
            <div className="education-section">
              <h1 className="main-img-tag">Education </h1>
              <form onSubmit={handleSubmit}>
                <label className="input-label" htmlFor="collegename">
                  College / School Name:
                </label>
                <br />
                <input
                  type="text"
                  name="collegeName"
                  required
                  className="username-input-field"
                  placeholder="College Name"
                />
                <br />
                <label className="input-label">Studied Field:</label>
                <br />
                <input
                  type="text"
                  name="studiedField"
                  required
                  className="username-input-field"
                  placeholder="Studied"
                />
                <br />
                <label className="input-label">Start Date: </label>
                <br />
                <input
                  type="date"
                  name="startDate"
                  required
                  className="username-input-field"
                  placeholder="Start Date "
                />
                <br />
                <label className="input-label">End Date: </label> <br />
                <input
                  type="date"
                  name="endDate"
                  required
                  className="username-input-field"
                  placeholder="Start Date "
                />
                <br />
                <label className="input-label">Grade: </label>
                <br />
                <input
                  type="text"
                  name="grade"
                  required
                  className="username-input-field"
                  placeholder="Grade"
                />
                <br />
                <button type="submit" className="add-btn">
                  Add College
                </button>
              </form>
              <ul>
                {colleges.map((college, index) => (
                  <li key={college.id}>
                    <p>College Name: {college.name}</p>
                    <p>Studied Field: {college.studied}</p>
                    <p>Start Date: {college.startDate}</p>
                    <p>End Date: {college.endDate}</p>
                    <p>Grade: {college.grade}</p>
                  </li>
                ))}
              </ul>
            </div>
            <div className="education-section">
              <h1 className="main-img-tag">Clubs & Associations </h1>
              <form onSubmit={handleClubSubmit}>
                <label className="input-label" htmlFor="clubname">
                  Club / Association Name:
                </label>
                <br />
                <input
                  type="text"
                  name="clubName"
                  required
                  className="username-input-field"
                  placeholder="Club / Association Name"
                />
                <br />
                <label className="input-label">Start Date: </label>
                <br />
                <input
                  type="date"
                  name="startDate1"
                  required
                  className="username-input-field"
                  placeholder="Start Date "
                />
                <br />
                <label className="input-label">End Date: </label> <br />
                <input
                  type="date"
                  name="endDate1"
                  required
                  className="username-input-field"
                  placeholder="Start Date "
                />
                <br />
                <button type="submit" className="add-btn">
                  Add Club / Associations
                </button>
              </form>
              <ul>
                {clubs.map((club, index) => (
                  <li key={index}>
                    <p>Club Name: {club.name}</p>
                    <p>Start Date: {club.startDate}</p>
                    <p>End Date: {club.endDate}</p>
                  </li>
                ))}
              </ul>
            </div>
            <div className="experience-section">
              <h1 className="main-img-tag">CO-OP PLACEMENT Experience </h1>
              <form onSubmit={handleWorkExpSubmit}>
                <label className="input-label" htmlFor="companyname">
                  Company Name:
                </label>
                <br></br>
                <input
                  type="text"
                  name="companyName"
                  required
                  className="username-input-field"
                  placeholder="Company Name"
                />
                <br />
                <label className="input-label">Role :</label>
                <br />
                <input
                  type="text"
                  name="role"
                  required
                  className="username-input-field"
                  placeholder="Role"
                />
                <br />
                <label className="input-label">Year: </label>
                <br />
                <input
                  type="date"
                  name="startJobDate"
                  required
                  className="username-input-field"
                  placeholder="Year "
                />
                <br />
                <label className="input-label">About Job Role: </label>
                <br />
                <textarea
                  type="text"
                  name="response"
                  required
                  className="username-input-field"
                  placeholder="About Job Role "
                />
                <br />
                <button type="submit" className="add-btn">
                  Add Company
                </button>
              </form>
              <ul>
                {companies.map((college, index) => (
                  <li key={college.id}>
                    <p>Company Name: {college.companyName}</p>
                    <p>Role : {college.role}</p>
                    <p>Year: {college.startJobDate.slice(0, 4)}</p>
                    <p>About Job Role: {college.response}</p>
                  </li>
                ))}
              </ul>
            </div>
            <div className="reference-details">
              <h1 className="main-img-tag">References</h1>
              <input
                type="text"
                value={reference}
                onChange={(e) => setReference(e.target.value)}
                className="username-input-field"
                placeholder="Add reference"
              />
              <button onClick={handleReferences} className="add-btn">
                Add References
              </button>
              <ul>
                {referencesList.map((lang) => (
                  <li>{lang}</li>
                ))}
              </ul>
            </div>

            <div>
              <div className="skills-section">
                <h1 className="main-img-tag">SKILLS & EXPERTISE</h1>
                <input
                  type="text"
                  value={skill}
                  onChange={(e) => setSkill(e.target.value)}
                  className="username-input-field"
                  placeholder="Add Skill"
                />
                <button onClick={handleAddSkill} className="add-btn">
                  Add Skill
                </button>
                <ul>
                  {skillList.map((skill) => (
                    <li>{skill}</li>
                  ))}
                </ul>
              </div>
              <div className="description-section">
                <label className="input-label" htmlFor="Description">
                  Description
                </label>
                <textarea
                  id="Description"
                  className="username-input-field"
                  value={ProExp}
                  placeholder="Description"
                  type="textarea"
                  onChange={(e) => setProExp(e.target.value)}
                  min-height="100px"
                />
              </div>
            </div>
          </div>
          {generatePDF()}
        </div>
      </div>
    </>
  );
};

export default Resume4;