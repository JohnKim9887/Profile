import {
  AppShell,
  Badge,
  Container,
  SimpleGrid,
  Stack,
  Text,
  Title,
} from '@mantine/core'
import {VideoCard,  AppCard } from "./components/ProjectCard";







function App() {
  return (
    <AppShell
      padding="xl"
      style={{
        minHeight: '100vh',
        background:
          'linear-gradient(140deg, rgba(250, 245, 235, 1) 0%, rgba(231, 242, 255, 1) 55%, rgba(248, 240, 232, 1) 100%)',
      }}
    >
      <AppShell.Header>
        <Container size="lg">
          <Text>
            Portfolio
          </Text>
          
        </Container>
      </AppShell.Header>
      <Container size="lg">
        <Stack gap="xl">
          <Stack gap="sm" style={{ maxWidth: 720 }}>
            <Badge variant="gradient" gradient={{ from: 'orange', to: 'blue' }}>
              Portfolio
            </Badge>
            <Title order={1} fz="clamp(2.4rem, 4vw, 3.4rem)" c="dark">
              Projects
            </Title>
            <Text c="dimmed" fz="md">
              I recently graduated from the University of Queensland as a computer science major. Im currently looking for a work.
            </Text>
          </Stack>

          <SimpleGrid cols={{ base: 1, sm: 2 }} spacing="xl">
            <VideoCard
              title="Media Archive"
              description="A tag based media cataloguing app."
              tag="App"
              embedUrl="https://www.youtube.com/embed/mL8Hany1RHg"
            />
            <AppCard
              title="Boid Simulation"
              description="A boid simulation using typescript."
              tag="App"
              imageLink="/JohnKimProfile/boid_image.png"
              href="https://johnkim9887.github.io/typescript_boid/"
            />
          </SimpleGrid>
        </Stack>
      </Container>
    </AppShell>
  )
}

export default App
