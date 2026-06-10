import React, { useEffect } from 'react'
import { Box, Typography, Button, CardMedia, Paper, Avatar } from "@mui/material";
import { Link } from 'react-router-dom';
import { Container, Grid, Card } from '@mui/material';
import { FaHandPointer, FaRegCalendarAlt } from 'react-icons/fa';
import { FiBell } from 'react-icons/fi';
import TimelineIcon from '@mui/icons-material/Timeline';
import BarChartIcon from '@mui/icons-material/BarChart';
import Header from '../components/Header';
import Footer from '../components/Footer';



function LandingPage() {
    return (
        <div>
            <Header/>
            <Box
                sx={{
                    minHeight: "650px",
                    backgroundImage: "url('https://substackcdn.com/image/fetch/$s_!aT-k!,w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fbucketeer-e05bbc84-baa3-437e-9518-adb32be77984.s3.amazonaws.com%2Fpublic%2Fimages%2F2ec61ea2-5f16-4789-b376-252f328b74ff_1920x1080.png')",
                    backgroundSize: "cover",
                    backgroundPosition: "bottom",
                    backgroundRepeat: "no-repeat",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "top",
                    alignItems: "center",
                    color: "white",
                    textAlign: "center",
                    p: 4,
                    pt: 15,
                }}
            >
                <Typography variant="h2" data-aos="fade-up" sx={{ color: "#7D4427",fontFamily: '"Dancing Script", cursive', fontWeight: "800",mb:3 }}>
                    Build Better Habits, Build a Better Life
                </Typography>
                <Typography variant="h6" data-aos="fade-up" sx={{ color: "#2D1B14",fontWeight:"800",fontFamily: '"Science Gothic", sans-serif',mb:2 }}>
                    You see the right habits at the right time so your day never feels crowded.
                </Typography>
                <Link to={'/login'}>
                    <Button className='animate-bounce'
                        variant="contained"
                        sx={{
                            mt: 2,
                            backgroundColor: "#7D4427",
                            "&:hover": { backgroundColor: "#b87d6b" },
                        }} data-aos="flip-left" 
                    >
                        Start Tracking
                    </Button>
                </Link>
            </Box>

            <Box sx={{ backgroundColor: '#b08f78', py: 8 }}>
                <Container maxWidth="lg" sx={{ py: 8, textAlign: 'center' }}>
                    <Typography variant="h4" sx={{ fontWeight: 800, mb: 6, color: '#7D4427',fontFamily: '"Dancing Script", cursive', fontWeight: "800" }}>
                        Why Habitify?
                    </Typography>

                    <Grid container spacing={3} justifyContent="center" data-aos="zoom-in" >
                        <Grid item md={4}>
                            <Card elevation={0} sx={{ p: 3, border: '1px solid #2D1B14 ', borderRadius: 4, height: '100%', backgroundColor: '#ebe9ea' }}>
                                <Box sx={{ mb: 2, display: 'flex', justifyContent: 'center' }}>
                                    <FaHandPointer style={{ fontSize: '40px', color: '#ff7043' }} />
                                </Box>
                                <Typography variant="h6" sx={{ fontWeight: 700, mb: 1, color: '#7D4427',fontFamily: '"Science Gothic", sans-serif' }}>Effortless Tracking</Typography>
                                <Typography variant="body2" color="#7D4427" sx={{fontFamily: '"Science Gothic", sans-serif'}}>One-tap logging just feels relaxed.</Typography>
                            </Card>
                        </Grid>

                        <Grid item md={4} data-aos="zoom-in" >
                            <Card elevation={0} sx={{ p: 3, border: '1px solid #2D1B14 ', borderRadius: 4, height: '100%', backgroundColor: '#ebe9ea' }}>
                                <Box sx={{ mb: 2, display: 'flex', justifyContent: 'center' }}>
                                    <FaRegCalendarAlt style={{ fontSize: '40px', color: '#66bb6a' }} />
                                </Box>
                                <Typography variant="h6" sx={{ fontWeight: 700, mb: 1, color: '#7D4427',fontFamily: '"Science Gothic", sans-serif' }}>Visual Progress</Typography>
                                <Typography variant="body2" color="#7D4427" sx={{fontFamily: '"Science Gothic", sans-serif'}}>Colorful streak icons when seasonal streaks.</Typography>
                            </Card>
                        </Grid>


                        <Grid item md={4} data-aos="zoom-in" >
                            <Card elevation={0} sx={{ p: 3, border: '1px solid #2D1B14 ', borderRadius: 4, height: '100%', backgroundColor: '#ebe9ea' }}>
                                <Box sx={{ mb: 2, display: 'flex', justifyContent: 'center' }}>
                                    <FiBell style={{ fontSize: '40px', color: '#ffa726' }} />
                                </Box>
                                <Typography variant="h6" sx={{ fontWeight: 700, mb: 1, color: '#7D4427',fontFamily: '"Science Gothic", sans-serif' }}>Smart Reminders</Typography>
                                <Typography variant="body2" color="#7D4427" sx={{fontFamily: '"Science Gothic", sans-serif'}}>Notifications and notifications.</Typography>
                            </Card>
                        </Grid>

                    </Grid>
                </Container>
            </Box>

            <Box
                sx={{
                    minHeight: "750px",
                    backgroundImage: "url('https://quotefancy.com/media/wallpaper/3840x2160/592239-Jack-Canfield-Quote-Your-habits-will-determine-your-future.jpg')",
                    backgroundSize: "cover",
                    backgroundPosition: "top",
                    backgroundRepeat: "no-repeat",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "top",
                    alignItems: "center",
                    color: "white",
                    textAlign: "center",
                    p: 4,
                    pt: 15,
                }}
                
            >
            </Box>
           


            <Box sx={{ py: 8, px: 2, backgroundColor: '#dccdbe' }}>
                <Typography
                    variant="h4"
                    align="center"
                    sx={{ mb: 6, fontWeight: 700, color: '#7D4427',fontFamily: '"Dancing Script", cursive', fontWeight:"800" }}
                >
                    Visualize Your Progress
                </Typography>

                <Box
                    sx={{
                        display: "flex",
                        flexWrap: "wrap",
                        justifyContent: "center",
                        gap: 4,
                        maxWidth: "lg",
                        mx: "auto",
                    }} 
                >

                    <Card
                        sx={{
                            flex: "1 1 300px",
                            maxWidth: 400,
                            borderRadius: 4,
                            border: "1px solid #2D1B14",
                            boxShadow: "none",
                            backgroundColor: "#6a4433",
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "space-between",
                            textAlign: "center",
                        }} data-aos="flip-left" 
                    >
                        <Box sx={{ p: 3, display: "flex", flexDirection: "column", alignItems: "center", gap: 1.5 }}>
                            <TimelineIcon sx={{ color: "#4caf50", fontSize: 40 }} />
                            <Typography variant="h6" fontWeight="bold" sx={{ color: "#312b23",fontFamily: '"Science Gothic", sans-serif' }}>
                                The Streak View
                            </Typography>
                        </Box>

                        <CardMedia
                            component="img"
                            image="https://images.ctfassets.net/lzny33ho1g45/3V8KkxNntBr2bNDhhRLHFc/f6b25c5a82e25b1bec40bdffa129d9e0/image9.jpg"
                            alt="Streak View UI"
                            sx={{ height: 200, objectFit: "contain", p: 2, backgroundColor: "#6a4433" }}
                        />

                        <Box sx={{ p: 2, color: "#312b23" }}>
                            <Typography variant="body2" sx={{ fontWeight: 700,fontFamily: '"Science Gothic", sans-serif' }}>
                                Consistency is key. See your daily small wins stack up into unbreakable chains of success.
                            </Typography>
                        </Box>
                    </Card>


                    <Card
                        sx={{
                            flex: "1 1 300px",
                            maxWidth: 400,
                            borderRadius: 4,
                            border: "1px solid #2D1B14",
                            boxShadow: "none",
                            backgroundColor: "#6a4433",
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "space-between",
                            textAlign: "center",
                        }} data-aos="flip-left" 
                    >
                        <Box sx={{ p: 3, display: "flex", flexDirection: "column", alignItems: "center", gap: 1.5 }}>
                            <BarChartIcon sx={{ color: "#1976d2", fontSize: 40 }} />
                            <Typography variant="h6" fontWeight="bold" sx={{ color: "#312b23",fontFamily: '"Science Gothic", sans-serif' }}>
                                Performance Heatmap
                            </Typography>
                        </Box>

                        <CardMedia
                            component="img"
                            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQd2YM5KiYXnZxQHNT5w4Mzb65sEkZ-VsycQ&s"
                            alt="Performance Heatmap"
                            sx={{ height: 200, objectFit: "contain", p: 2, backgroundColor: "#6a4433" }}
                        />

                        <Box sx={{ p: 2, color: "#312b23" }}>
                            <Typography variant="body2" sx={{ fontWeight: 700,fontFamily: '"Science Gothic", sans-serif' }}>
                                Go beyond streaks. Identify patterns and optimize your habits with data-driven insights.
                            </Typography>
                        </Box>
                    </Card>
                </Box>
            </Box>

            <Box sx={{ py: 8, px: 2, backgroundColor: '#b08f78' }}>
                <Typography variant="h4" sx={{ fontWeight: 800, mb: 6, color: '#7D4427', textAlign: 'center',fontFamily: '"Dancing Script", cursive' }}>
                    Proven Success Stories
                </Typography>
                <Typography
                    variant="h6"
                    sx={{
                        fontWeight: 800,
                        mb: 6,
                        color: '#7D4427',
                        textAlign: 'center',
                        maxWidth: 800,
                        mx: "auto",fontFamily: '"Dancing Script", cursive',fontWeight:"800"
                    }}  data-aos="flip-down"
                >
                    Habitify isn't just loved by our users - we've also been recognized by industry leaders.
                    Featured as the App of the Day on the Apple App Store, we're committed to delivering quality,
                    effectiveness, and a platform for genuine transformation.
                </Typography>

                <Box
                    sx={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "space-between",
                        px: { xs: 2, md: 6 },
                        py: 4,
                        gap: 3,
                    }}
                >
                    <Paper
                        elevation={3}
                        sx={{
                            p: 3,
                            borderRadius: 3,
                            flex: 1,
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "space-between",
                            backgroundColor: '#ebe9ea',
                        }} data-aos="flip-down" 
                    >
                        <Typography variant="body1" sx={{ mb: 5, lineHeight: 1.7, color: '#7D4427',fontFamily: '"Science Gothic", sans-serif' }}>
                            “Before Habitify, I struggled with managing my time effectively and often felt overwhelmed.
                            But the app has helped me create a well-structured routine and stick to it.”
                        </Typography>
                        <Box sx={{ display: "flex", alignItems: "center", mt: 2, color: '#7D4427' }}>
                            <Avatar src="https://cdn.prod.website-files.com/5d3aa39f8474c472841a7dfc/6486be69c649a2be099d938a_Rectangle%20168.jpg" alt="Jennifer Ellison" sx={{ mr: 2 }} />
                            <Box>
                                <Typography variant="subtitle1" fontWeight="600">Jennifer Ellison</Typography>
                                <Typography variant="caption">Product Manager</Typography>
                            </Box>
                        </Box>
                    </Paper>

                    <Paper data-aos="flip-down" elevation={3} sx={{ p: 3, borderRadius: 3, flex: 1, backgroundColor: '#ebe9ea' }}>
                        <Typography variant="body1" sx={{ mb: 13, lineHeight: 1.7, color: '#7D4427',fontFamily: '"Science Gothic", sans-serif' }}>
                            “Habitify is a game-changer for me. I've been able to set fitness goals and maintain consistency,
                            all while tracking my progress.”
                        </Typography>
                        <Box sx={{ display: "flex", alignItems: "center", mt: 2, color: '#7D4427' }}>
                            <Avatar src="https://cdn.prod.website-files.com/5d3aa39f8474c472841a7dfc/6486bdd6d982eb5bc9b8d772_Rectangle%20168.png" alt="Thomas Maxwell" sx={{ mr: 2 }} />
                            <Box>
                                <Typography variant="subtitle1" fontWeight="600">Thomas Maxwell</Typography>
                                <Typography variant="caption">Fitness Enthusiast</Typography>
                            </Box>
                        </Box>
                    </Paper>

                    <Paper data-aos="flip-down" elevation={3} sx={{ p: 3, borderRadius: 3, flex: 1, backgroundColor: '#ebe9ea' }}>
                        <Typography variant="body1" sx={{ mb: 10, lineHeight: 1.7, color: '#7D4427',fontFamily: '"Science Gothic", sans-serif' }}>
                            “As an entrepreneur, my days are extremely busy. Habitify has helped me create a daily routine
                            that keeps me grounded, focused, and productive.”
                        </Typography>
                        <Box sx={{ display: "flex", alignItems: "center", mt: 13, color: '#7D4427' }}>
                            <Avatar src="https://cdn.prod.website-files.com/5d3aa39f8474c472841a7dfc/6486be75bfa0a739d88648d2_Rectangle%20171.jpg" alt="David Lee" sx={{ mr: 2 }} />
                            <Box>
                                <Typography variant="subtitle1" fontWeight="600">Sophia Carter</Typography>
                                <Typography variant="caption">Entrepreneur</Typography>
                            </Box>
                        </Box>
                    </Paper>

                    <Paper data-aos="flip-down" elevation={3} sx={{ p: 3, borderRadius: 3, flex: 1, backgroundColor: '#ebe9ea' }}>
                        <Typography variant="body1" sx={{ mb: 7, lineHeight: 1.7, color: '#7D4427',fontFamily: '"Science Gothic", sans-serif' }}>
                            “I was having trouble balancing my studies, part-time job, and personal life.
                            Habitify helped me organize my day better, kept me motivated, and turned my life around.”
                        </Typography>
                        <Box sx={{ display: "flex", alignItems: "center", mt: 2, color: '#7D4427' }}>
                            <Avatar src="https://cdn.prod.website-files.com/5d3aa39f8474c472841a7dfc/6486be7af4a4543398711bef_Rectangle%20169.jpg" alt="Sophia Carter" sx={{ mr: 2 }} />

                            <Box>
                                <Typography variant="subtitle1" fontWeight="600">David Lee</Typography>
                                <Typography variant="caption">Student</Typography>
                            </Box>
                        </Box>
                    </Paper>
                </Box>
            </Box>
        <Footer/>
        </div>
    )
}

export default LandingPage
