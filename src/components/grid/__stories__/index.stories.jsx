import React from 'react';
import { Grid } from '..';
import { DesktopLayout, MobileLayout } from '../../layout';

const styles = {
  sidebar: {
    width: 280,
    background: '#eee',
    padding: 24,
    marginRight: 64,
    borderRadius: 8,
    alignSelf: 'flex-start',
  },
  card: {
    padding: 24,
    minHeight: 100,
    background: '#fff',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.12)',
    borderRadius: 8,
  },
  placeholder: {
    background: 'rgba(0,0,0,.1)',
    borderRadius: 4,
  },
};

const Item = ({ color = '#eee', margin, padding = 8, height, children }) => (
  <div
    style={{
      margin,
      padding,
      background: color,
      height,
      boxShadow: 'inset 0 0 0 2px rgba(0,0,0,.4)',
    }}
  >{children}</div>
);

export default {
  title: 'Grid',
  component: Grid,
  parameters: {
    layout: 'fullscreen',
  },
};

export const Primary = () => (
  <div style={{ width: '100%', maxWidth: 1280, padding: 32, margin: '0 auto' }}>
    <h2>С фиксированным сайдбаром</h2>
    <p>Сетка не зависит от Layout`а и может быть вписана в область меньшего размера</p>
    <div style={{ display: 'flex' }}>
      <div style={styles.sidebar}>
        <div style={{ ...styles.placeholder, width: 56, height: 56, borderRadius: 50 }} />
        <div style={{ ...styles.placeholder, height: 24, width: '80%', marginTop: 16 }} />
        <div style={{ ...styles.placeholder, height: 16, width: '40%', marginTop: 16 }} />
        <div style={{ ...styles.placeholder, height: 20, width: '70%', marginTop: 32 }} />
        <div style={{ ...styles.placeholder, height: 20, width: '70%', marginTop: 16 }} />
        <div style={{ ...styles.placeholder, height: 20, width: '70%', marginTop: 16 }} />
        <div style={{ ...styles.placeholder, height: 20, width: '70%', marginTop: 16 }} />
        <div style={{ ...styles.placeholder, height: 20, width: '70%', marginTop: 16 }} />
        <div style={{ ...styles.placeholder, height: 20, width: '50%', marginTop: 64 }} />
      </div>
      <div style={{ flexGrow: 1 }}>
        <Grid spacing={32}>
          <Grid.Item mxs={12} xs={8}>
            {Array(3).fill(0).map((a, i) => (
              <div key={i} style={{ ...styles.card, marginBottom: 32 }}>
                <div style={{ ...styles.placeholder, height: 24 }}></div>
                <div style={{ ...styles.placeholder, height: 18, width: '60%', marginTop: 16 }}></div>
                <div style={{ height: 32 }} />
              </div>
            ))}
          </Grid.Item>
          <Grid.Item mxs={12} xs={4}>
            <div style={{ ...styles.card, height: 160 }} />
            <div style={{ ...styles.card, height: 160, marginTop: 32 }} />
          </Grid.Item>
        </Grid>
      </div>
    </div>
  </div>
);

export const Alignment = () => (
  <MobileLayout>
    <h3>Align</h3>
    {['start', 'center', 'end'].map(align => (
      <React.Fragment key={align}>
        <h3>{align}:</h3>
        <div style={{ background: '#eee' }}>
          <Grid align={align} spacing={32}>
            <Grid.Item xs={2}>
              <Item margin='16px 0' color='#bbb' />
            </Grid.Item>
            <Grid.Item xs={2}>
              <Item margin='16px 0' color='#bbb' />
            </Grid.Item>
            <Grid.Item xs={2}>
              <Item margin='16px 0' color='#bbb' />
            </Grid.Item>
          </Grid>
        </div>
      </React.Fragment>
    ))}
  </MobileLayout>
);

export const Breakpoints = () => (
  <DesktopLayout>
    <p>Поддерживается установка разных размеров колонок для разных точек остановки</p>
    <Grid spacing={32} style={{ marginTop: 32 }}>
      <Grid.Item xs={9} s={6} m={4} l={3}>
        <Item color='#ff000033' padding={24} />
      </Grid.Item>
      <Grid.Item xs={3} s={6} m={8} l={9}>
        <Item color='#0000ff33' padding={24} />
      </Grid.Item>
    </Grid>
  </DesktopLayout>
);

export const DifferentColumns = () => (
  <DesktopLayout>
    {Array(11).fill(0).map((v, i) => (
      <Grid key={i} style={{ marginBottom: 16 }}>
        <Grid.Item xs={i + 1}>
          <Item color='#ff000033'>
            {`xs=${i + 1}`}
          </Item>
        </Grid.Item>

        <Grid.Item xs={12 - (i + 1)}>
          <Item color='#ff000033'>
            {`xs=${i + 1}`}
          </Item>
        </Grid.Item>
      </Grid>
    ))}

    {[1, 2, 3, 4, 6, 12].map(n => (
      <Grid key={n} style={{ marginBottom: 16 }}>
        {Array(12 / n).fill(0).map((v, j) => (
          <Grid.Item key={j} xs={n}>
            <Item color='#0000ff33'>
              {`xs=${n}`}
            </Item>
          </Grid.Item>
        ))}
      </Grid>
    ))}
  </DesktopLayout>
);

export const Overflow = () => (
  <MobileLayout>
    <p>Меньше точки xs все колонки будут занимать всю ширину сетки и выстроятся по вертикали</p>
    {[3, 4, 6, 12].map(n => (
      <Grid key={n} style={{ marginBottom: 48 }}>
        {Array(12 / n).fill(0).map((v, j) => (
          <Grid.Item key={j} xl={n} xs={12}>
            <Item color='#0000ff33' height={48} />
          </Grid.Item>
        ))}
      </Grid>
    ))}
  </MobileLayout>
);
