import Card from "react-bootstrap/Card";
import "./Home.css";

function Home() {
  return (
    <div className="home-container">
      <div className="home-body-1">
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src="https://studentscms.spu.ac.th/stdempimg.cfm?empstdtype=STD&vdata=0FD2C4EFD183B2EF052EC6D0DB0ECA98C9E2180ADEFFDF" />
          <Card.Body>
            <Card.Title>
              <b>นาย สมาวิทย์ ธีรกุลชัยกิจ</b>
            </Card.Title>
            <Card.Text>
              เลขประจำตัว 66086480 <br />
              อายุ 20 ปี
              <br />
              เป็นนักศึกษามหาวิทยาลัยศรีปทุม
              <br />
              คณะเทคโนโลยีสารสนเทศ
              <br />
              สาขาวิทยาการคอมพิวเตอร์
              <br />
              และนวัตกรรมการพัฒนาซอฟต์แวร์
              <br />
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
      <div className="home-body-2">
        <h4 className="home-text">
          สวัสดีครับ ผมมีความสนใจในการเขียนโปรแกรม และมีประสบการณ์ในด้านการเขียนโปรแกรมพื้นฐานด้วยภาษา
          Html และ Js โดยเฉพาะอย่างยิ่งด้าน Web Development ครับ ผมเชื่อมั่นในการทำงานที่มีประสิทธิภาพและมุ่งมั่นสู่ความสำเร็จ
          ยินดีที่ได้พบครับ และหวังเป็นอย่างยิ่งว่าจะมีโอกาสร่วมงานกับท่านในอนาคตครับ
          <br />
          <img src="https://media.tenor.com/GOj9ZF_-ZOcAAAAM/cat.gif" alt="" style={{ width: "200px", height: "200px" , marginTop: "10px"}}/> 
        </h4>
      </div>
    </div>
  );
}

export default Home;