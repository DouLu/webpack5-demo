import { Card, Col, Row } from "antd";
import { Link } from "react-router-dom";
import { useEffectOnce } from "react-use";
// import Clock from "../components/clock/Clock";

export default function Home() {
  useEffectOnce(() => {
    console.log(1111);
  });
  return (
    <Row gutter={30}>
      <Col span={18}>
        <Row gutter={15}>
          <Col span={8}>
            <Card title="todo list" extra={<Link to={"/todos"}>more</Link>}>
              练习项目，模仿todo list
            </Card>
          </Col>
          <Col span={8}>
            <Card title="时钟⏰" extra={<Link to="">more</Link>}>
              练习项目，熟悉time API和canvas/svg
            </Card>
          </Col>
          <Col span={8}>
            <Card title="日签" extra={<Link to={"/dailyCheckIn"}>more</Link>}>
              练习项目，一个专属自己的每日签到应用
            </Card>
          </Col>
        </Row>
        <Row gutter={15}>
          <Col span={8}>
            <Card title="待定" extra={<Link to="">more</Link>}>
              后续添加。。。
            </Card>
          </Col>
        </Row>
      </Col>
      <Col span={6}>
        <Card title={false} style={{ marginBottom: 15 }}>
          {/* <Clock width={120} height={120} /> */}
        </Card>
        <Card title="profile">
          本项目是一个聚合各种功能的工具箱🧰，会一直慢慢添加有趣的内容，期待一下吧😚！
        </Card>
      </Col>
    </Row>
  );
}
