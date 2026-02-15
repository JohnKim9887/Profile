import { AspectRatio, Badge, Card, Group, Text, Title , Image} from '@mantine/core'

type ProjectProps = {
  title: string
  description: string
  tag: string
  embedUrl: string
}
type ImageProps = {
  title: string;
  description: string;
  tag: string;
  imageLink: string;
  href: string;

};

export function AppCard({ title, description, tag, imageLink, href }: ImageProps): React.JSX.Element {
  return (
    <Card withBorder radius="lg" padding="lg" shadow="sm">
      <Group justify="space-between" mb="sm">
        <Badge color="dark" variant="light" tt="uppercase" size="sm">
          {tag}
        </Badge>
        <Text size="xs" c="dimmed" tt="uppercase">
          YouTube
        </Text>
      </Group>

      <Title order={3} fz="1.35rem">
        {title}
      </Title>

      <Text size="sm" c="dimmed" mb="md">
        {description}
      </Text>

      <a href={href} target="_blank" rel="noreferrer">
        <Image src={imageLink} alt={title} radius="md" mb="lg" />
      </a>
      <Text size="sm" c="dimmed">
        Click to go to the live demo
      </Text>
    </Card>
  );
}



export function VideoCard({ title, description, tag, embedUrl }: ProjectProps) {
  return (
    <Card withBorder radius="lg" padding="lg" shadow="sm">
      <Group justify="space-between" mb="sm">
        <Badge color="dark" variant="light" tt="uppercase" size="sm">
          {tag}
        </Badge>
        <Text size="xs" c="dimmed" tt="uppercase">
          YouTube
        </Text>
      </Group>

      <Title order={3} fz="1.35rem">
        {title}
      </Title>
      {/* TODO: Update the description text below. */}
      <Text size="sm" c="dimmed" mb="md">
        {description}
      </Text>

      <AspectRatio ratio={16 / 9} mb="lg">
        <iframe
          src={embedUrl}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
      </AspectRatio>

    </Card>
  )
}

export default VideoCard
