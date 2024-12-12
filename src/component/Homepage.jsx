export default function Homepage() {
  return (
    <>
      {/* App Bar */}
      <AppBar
        position="static"
        sx={{ backgroundColor: "#ffffff", alignItems: "center" }}
      >
        <Toolbar>
          {/* Navigation Links */}
          <Box sx={{ flexGrow: 1, display: "flex", gap: 2 }}>
            <Button>Home</Button>
            <Button>Receti</Button>
            <Button>Napravi nes </Button>
            <Button>Contact</Button>
          </Box>
        </Toolbar>
      </AppBar>

      {/* Title Section */}
      <Container sx={{ textAlign: "center", marginTop: 4 }}>
        <Stack
          direction={{ xs: "column", md: "row" }}
          spacing={4}
          alignItems="center"
          justifyContent="center"
        >
          {/* Image */}
          <Box
            component="img"
            src="https://images.unsplash.com/photo-1654922207993-2952fec328ae?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Welcome Image"
            sx={{
              width: { xs: "100%", md: "50%" },
              maxHeight: 500,
              borderRadius: 2,
            }}
          />

          {/* Title and Subtitle */}
          <Stack spacing={2} sx={{ textAlign: "left" }}>
            <Typography variant="h3">Welcome to Our Platform</Typography>
            <Typography variant="subtitle1">
              Your success is our priority. Explore the features and tools we
              offer!
            </Typography>
            <Button>Click me</Button>
            <Avatar>H</Avatar>
          </Stack>
        </Stack>
      </Container>

      <Box sx={{ backgroundColor: "#eda1a1", padding: "50px" }}>
        {/* Title Section */}
        <Container sx={{ textAlign: "center", marginTop: 4 }}>
          <Typography variant="h3" gutterBottom>
            Welcome to Our Platform
          </Typography>
          <Typography variant="subtitle1" gutterBottom>
            Your success is our priority. Explore the features and tools we
            offer!
          </Typography>
        </Container>

        {/* Cards Section */}
        <Container sx={{ marginTop: 4 }}>
          <Grid container spacing={3}>
            {/* Card 1 */}
            <Grid item xs={12} md={4}>
              <Card>
                <CardMedia
                  component="img"
                  height="140"
                  image="https://via.placeholder.com/150"
                  alt="Card 1 Image"
                />
                <CardContent>
                  <Typography variant="h5" component="div">
                    Feature 1
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Explore this amazing feature that helps you achieve
                    greatness.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>

            {/* Card 2 */}
            <Grid item xs={12} md={4}>
              <Card>
                <CardMedia
                  component="img"
                  height="140"
                  image="https://via.placeholder.com/150"
                  alt="Card 2 Image"
                />
                <CardContent>
                  <Typography variant="h5" component="div">
                    Feature 2
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Learn about this incredible tool that makes things easier.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>

            {/* Card 3 */}
            <Grid item xs={12} md={4}>
              <Card>
                <CardMedia
                  component="img"
                  height="140"
                  image="https://via.placeholder.com/150"
                  alt="Card 3 Image"
                />
                <CardContent>
                  <Typography variant="h5" component="div">
                    Feature 3
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Discover how this feature can boost your productivity.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </Box>

      <Box height={120}></Box>

      <Box sx={{ backgroundColor: "#eda1a1", padding: "50px" }}>
        <Container sx={{ marginTop: 4 }}>
          <Grid container spacing={3}>
            {/* Card 1 */}
            <Grid item xs={12} md={4}>
              <Card>
                <CardMedia
                  component="img"
                  height="140"
                  image="https://via.placeholder.com/150"
                  alt="Card 1 Image"
                />
                <CardContent>
                  <Typography variant="h5" component="div">
                    Feature 1
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Explore this amazing feature that helps you achieve
                    greatness.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>

            {/* Card 2 */}
            <Grid item xs={12} md={4}>
              <Card>
                <CardMedia
                  component="img"
                  height="140"
                  image="https://via.placeholder.com/150"
                  alt="Card 2 Image"
                />
                <CardContent>
                  <Typography variant="h5" component="div">
                    Feature 2
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Learn about this incredible tool that makes things easier.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>

            {/* Card 3 */}
            <Grid item xs={12} md={4}>
              <Card>
                <CardMedia
                  component="img"
                  height="140"
                  image="https://via.placeholder.com/150"
                  alt="Card 3 Image"
                />
                <CardContent>
                  <Typography variant="h5" component="div">
                    Feature 3
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Discover how this feature can boost your productivity.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Title Section */}
      <Container sx={{ textAlign: "center", marginTop: 4 }}>
        <Stack
          direction={{ xs: "column", md: "row" }}
          spacing={4}
          alignItems="center"
          justifyContent="center"
        >
          {/* Image */}
          <Box
            component="img"
            src="https://images.unsplash.com/photo-1654922207993-2952fec328ae?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Welcome Image"
            sx={{
              width: { xs: "100%", md: "50%" },
              maxHeight: 500,
              borderRadius: 2,
            }}
          />

          {/* Title and Subtitle */}
          <Stack spacing={2} sx={{ textAlign: "left" }}>
            <Typography variant="h3">Welcome to Our Platform</Typography>
            <Typography variant="subtitle1">
              Your success is our priority. Explore the features and tools we
              offer!
            </Typography>
          </Stack>
        </Stack>
      </Container>
    </>
  );
}
