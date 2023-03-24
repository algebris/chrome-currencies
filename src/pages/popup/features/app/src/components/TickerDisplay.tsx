import {Paper, Text, Image, Grid } from '@mantine/core';

export interface TickerDisplayProps {
  symbol: string;
  last: number;
  volume: number;
}

export const TickerDisplay: React.FC<TickerDisplayProps> = ({ symbol, last, volume }) => {
  return (
    <Paper p="md" shadow="xs" style={{ marginBottom: 16 }}>
      <Grid gutter="md">
        <Grid.Col w="auto">
          <Image
            src={`/img/${symbol.toLowerCase()}.png`}
            alt={symbol}
            width={48}
            height={48}
            style={{ display: 'block', margin: '0 auto' }}
          />
        </Grid.Col>
        <Grid.Col>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 8 }}>
            <Text>Last:</Text>
            <Text>{last.toLocaleString('en-US')}</Text>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 8 }}>
            <Text>Volume:</Text>
            <Text>{volume.toLocaleString('en-US')}</Text>
          </div>
        </Grid.Col>
      </Grid>
    </Paper>
  );
};
