import React from 'react'
import { Route, Switch } from 'react-router-dom';
import { Container, Grid } from 'semantic-ui-react';
import BaoHanh from './BaoHanh';
import DoiTra from './DoiTra';
import GiaoHang from './GiaoHang/GiaoHang';
import MenuComponent from './Menu';
import ThanhToan from './ThanhToan';
import TraGop from './TraGop';

const Policy:React.FC = () => {

  return (
    <Container>
    <Grid className="small-container">
      <Grid.Column width={4}>
        <MenuComponent />
      </Grid.Column>
      <Grid.Column width={12}>
        <Switch>
          <Route exact path='/policy/giaohang' component={GiaoHang} />
          <Route exact path='/policy/baohanh' component={BaoHanh} />
          <Route exact path='/policy/thanhtoan' component={ThanhToan} />
          <Route exact path='/policy/gopy' component={ThanhToan} />
          <Route exact path='/policy/tragop' component={TraGop} />
          <Route exact path='/policy/doitra' component={DoiTra} />
          <Route exact path='/policy/quyche' component={ThanhToan} />
          <Route exact path='/policy/doanhnghiep' component={ThanhToan} />
          <Route exact path='/policy/huongdanmuahang' component={ThanhToan} />

        </Switch>
      </Grid.Column>
    </Grid>
  </Container>
  );
}

export default (Policy)
