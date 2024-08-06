import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import ThemeToggle from '../components/ThemeToggle';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';

import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import IconButton from '@mui/material/IconButton';

import { Card, CardMedia, CardContent, Link } from '@mui/material';
import { UnderConstructionBanner } from '../components/UnderConstructionBanner';

const Home = () => {

  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" style={{ flexGrow: 1 }}>
            <Avatar alt="Diego D'mitry" src="/website/me.jpeg" />
            {/* <Avatar alt="Diego D'mitry" src="/me.jpeg" /> */}
            {/* <Avatar alt="Diego D'mitry" src="../../public/me.jpeg" /> */}
          </Typography>
          <ThemeToggle />
        </Toolbar>
      </AppBar>

      <Container>
        <Box
          display="flex"
          flexDirection="column"
          minHeight="100vh"
        >
          <Box
            mb={2}
            sx={{
              mt: {
                xs: 2,
                lg: 10
              },
              ml: {
                xs: 0,
                lg: 4
              },
            }}
          >
            <Typography
              variant="h2"
              component="h2"
              fontWeight={"bold"}
              sx={{
                fontSize: {
                  xs: '2rem', // font size for extra-small screens (mobile)
                  // sm: '2rem',   // font size for small screens
                  md: '3.8rem', // font size for medium screens
                  lg: '4rem',   // font size for large screens
                  // xl: '3.5rem', // font size for extra-large screens
                },
              }}
            >
              Diêgo D'mitry
            </Typography>
            <Typography
              variant="h4"
              component="h4"
              fontWeight={"bold"}
              sx={{
                fontSize: {
                  xs: '0.8rem', // font size for extra-small screens (mobile)
                  // sm: '2rem',   // font size for small screens
                  md: '1rem', // font size for medium screens
                  lg: '1.5rem',   // font size for large screens
                  // xl: '3.5rem', // font size for extra-large screens
                },
                mt: {
                  xs: 1,
                  lg: 1,
                },
                ml: {
                  xs: 0.2,
                  lg: 0.3
                },
              }}
            >
              Developer | Techinical Support Engineer
            </Typography>
            <Box mt={'1.5rem'}>
              <IconButton
                // edge="end" // Aligns the button at the beginning of the Toolbar or Box
                color="inherit"
                aria-label="github"
                href="https://github.com/diegodmitry"
                target="_blank"
                rel="noopener noreferrer"
              >
                <GitHubIcon
                  sx={{
                    fontSize: {
                      xs: "1.5rem",
                      lg: "2.2rem"
                    }
                  }}
                />
              </IconButton>
              <IconButton
                edge="start" // Aligns the button at the beginning of the Toolbar or Box
                color="inherit"
                aria-label="github"
                href="https://www.linkedin.com/in/diegodmitry/"
                target="_blank"
                rel="noopener noreferrer"
                sx={{ ml: '0.5rem' }}
              >
                <LinkedInIcon
                  sx={{
                    fontSize: {
                      xs: "1.5rem",
                      lg: "2.2rem"
                    }
                  }}
                />
              </IconButton>
            </Box>

            <Box
              sx={{
                mt: {
                  xs: "2rem",
                  lg: "4rem"
                }
              }}
            >
              <UnderConstructionBanner />
              <Typography
                variant="h4"
                component="h1"
                sx={{
                  fontWeight: '800',
                  marginBottom: '1rem'
                }}
              >
                Who am I?
              </Typography>
              <Box sx={{ typography: 'body1', lineHeight: 1.75, '& > p': { mb: 3 } }}>
                <Typography component="p">
                  👋 Hello!
                  I’m a dynamic Developer and IT Specialist with extensive experience in crafting scalable, efficient software solutions and managing complex IT infrastructures.
                  Currently, I am working with skills in application support at PrimeIT, where I handle system monitoring, log analysis, and database management, ensuring high system operability and performance.
                </Typography>
                <Typography component="p">
                  🚀 At SCUBIC, as a Frontend Developer, I excelled in creating intuitive and visually compelling user interfaces using React, Plotly, Material UI, React’s Context API, focusing on data-driven decision-making.
                </Typography>
                <Typography component="p">
                  🛠️ While at Trybe, I embraced the challenges of a Full Stack Developer, enhancing my proficiency in JavaScript, Node.js, and Express while diving deep into server-side logic and RESTful API integration.
                  My commitment to robust, secure application development is complemented by my skills in Docker and Jest, ensuring high-quality deployments and sustainable code bases.
                </Typography>
                <Typography component="p">
                  💼 My experience at the Department of Defense and various other organizations honed my capabilities in Linux server administration, network maintenance, and security management—ensuring optimal performance and reliability of IT systems.
                </Typography>
                <Typography component="p">
                  👥 I thrive in collaborative environments, where I can share knowledge and mentor budding developers.
                  My background in technical support has also instilled a patient and thorough approach to problem-solving and user assistance, ensuring technical solutions are accessible to all users.
                </Typography>
                <Typography component="p">
                  🌱 Continually seeking to grow my skill set and keep abreast of the latest technological advancements, I am driven by an unyielding passion for learning and innovation.
                </Typography>
                <Typography component="p">
                  🌐 My experience extends to network maintenance, cabling, and voice/data networks.
                </Typography>
                <Typography component="p">
                  💬 I'm a collaborator, a problem solver, and a continuous learner. If you're looking for someone who is passionate about development and well-versed in various facets of technology, let's connect! I would love to be part of your team.
                </Typography>
                <Typography component="p">
                  🖥️ Computer Skills
                  <ul>
                    <li>Operating Systems: Windows, Linux(CentOS, RedHat, Debian, ...), MacOS.</li>
                    <li>Windows Services: Active Directory, GPO.</li>
                    <li>Virtualization: Hyper-V, VMware, KVM.</li>
                    <li>Languages: Bash, Javascript, TypeScript, Python</li>
                    <li>Cloud Services: AWS</li>
                    <li>Security/Firewall: PFSense, FortiGate.</li>
                    <li>Database: Postgresql, Mysql, OracleDb, MongoDb.</li>
                    <li>Frameworks & Libraries: React, NodeJS</li>
                    <li>Version Control: Git.</li>
                    <li>Containerization: Docker, Kubernetes.</li>
                    <li>Network Services: DHCP, NTP, Samba, SSH, SAN.</li>
                  </ul>
                </Typography>

              </Box>
            </Box>
            {/* Blog or Writing */}
            {/* Courses */}
            <Box
              sx={{
                mt: {
                  xs: "2rem",
                  lg: "6rem"
                }
              }}
            >
              <Typography
                variant="h4"
                component="h1"
                sx={{
                  fontWeight: '800',
                  marginBottom: '1rem'
                }}
              >
                Writing
              </Typography>

              <Link 
                href="https://medium.com/@diegodevblog/desbloqueie-o-poder-do-monitoramento-linux-com-prometheus-e-grafana-da031f3eeb22"
                underline="none"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Card
                  sx={{
                    display: 'flex',
                    flexDirection: {
                      xs: 'column',
                      md: 'row',
                    },
                    mb: 2,
                    boxShadow: 'none', // Remove shadow
                    transition: 'transform 0.3s ease, background-color 0.3s ease', // Add transition for hover effect
                    '&:hover': {
                      transform: 'scale(1.01)', // Slightly scale up the card on hover
                      // backgroundColor: '#f0f0f0', // Optional: Change background color on hover
                    },
                  }}
                >
                  <CardMedia
                    component="img"
                    sx={{
                      width: {
                        xs: '100%',
                        md: '250px',
                      },
                      height: {
                        xs: 'auto',
                        md: '150px',
                      },
                    }}
                    image="https://miro.medium.com/v2/resize:fit:1400/format:webp/1*XX5IcoyeSaNXzaROOphqSA.jpeg"
                    alt="Cover image"
                  />
                  <Box
                    sx={{
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'center',
                    }}
                  >
                    <CardContent>
                      <Typography component="h2" variant="h5">
                        Monitore Linux com Prometheus e Grafana
                      </Typography>
                      <Typography variant="body1" color="textSecondary" sx={{ mt: 1 }}>
                        Guia prático para configurar e visualizar métricas em tempo real com essas ferramentas poderosas.
                      </Typography>
                    </CardContent>
                  </Box>
                </Card>
              </Link>

              <Link 
                href="https://diegodevblog.medium.com/o-balanceamento-de-carga-desmistificado-como-transformar-seu-balanceamento-de-carga-em-uma-m%C3%A1quina-1f8782376254"
                underline="none"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Card
                  sx={{
                    display: 'flex',
                    flexDirection: {
                      xs: 'column',
                      md: 'row',
                    },
                    mb: 2,
                    boxShadow: 'none', // Remove shadow
                    transition: 'transform 0.3s ease, background-color 0.3s ease', // Add transition for hover effect
                    '&:hover': {
                      transform: 'scale(1.01)', // Slightly scale up the card on hover
                      // backgroundColor: '#f0f0f0', // Optional: Change background color on hover
                    },
                  }}
                >
                  <CardMedia
                    component="img"
                    sx={{
                      width: {
                        xs: '100%',
                        md: '250px',
                      },
                      height: {
                        xs: 'auto',
                        md: '150px',
                      },
                    }}
                    image="https://miro.medium.com/v2/resize:fit:800/format:webp/1*JAUx10S6_IxUF5GL3zXnqA.png"
                    alt="Cover image"
                  />
                  <Box
                    sx={{
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'center',
                    }}
                  >
                    <CardContent>
                      <Typography component="h2" variant="h5">
                        Desmistifique o balanceamento de carga
                      </Typography>
                      <Typography variant="body1" color="textSecondary" sx={{ mt: 1 }}>
                        Aprenda a transformar seu balanceamento de carga em uma máquina eficiente com este guia detalhado.
                      </Typography>
                    </CardContent>
                  </Box>
                </Card>
              </Link>

            </Box>
          </Box>

        </Box>
      </Container>

    </>
  )
}

export default Home