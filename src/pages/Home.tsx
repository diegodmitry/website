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

const Home = () => {

  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" style={{ flexGrow: 1 }}>
            <Avatar alt="Diego D'mitry" src="../../public/me.jpeg" />
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
            {/* Blog */}
            {/* <Box
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
            </Box> */}
          </Box>

        </Box>
      </Container>

    </>
  )
}

export default Home