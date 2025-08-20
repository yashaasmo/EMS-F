


// import axios from "axios";
// // Hum apne saare API URLs ko is file se import kar rahe hain
// import { API_END_POINT } from "./authRoutes";

// // --- User Authentication Functions ---

// // User login
// export const userLogin = async (email, password) => {
//   try {
//     const response = await axios.post(API_END_POINT.LOGIN, {
//       email,
//       password,
//     });
//     return response.data;
//   } catch (error) {
//     console.error("Error in login", error);
//     throw error.response?.data?.message || "Login failed";
//   }
// };

// // User register
// export const userRegister = async (data) => {
//   try {
//     const response = await axios.post(API_END_POINT.REGISTER, data);
//     return response.data;
//   } catch (error) {
//     console.error("Error in register", error);
//     throw error.response?.data?.message || "Registration failed";
//   }
// };

// // --- Content Fetching Functions ---

// // Get headlines
// export const headline = async () => {
//   try {
//     const response = await axios.get(API_END_POINT.HEADLINE);
//     return response.data;
//   } catch (error) {
//     console.error("Error fetching headline.", error);
//     throw error.response?.data?.message || "Headline failed.";
//   }
// };

// // Get all shorts for the logged-in user
// export const newsshorts = async () => {
//   try {
//     const token = localStorage.getItem("token");
//     const response = await axios.get(API_END_POINT.NEWSSHORTS, {
//       headers: {
//         Authorization: `Bearer ${token}`,
//       },
//     });
//     return response.data;
//   } catch (error) {
//     console.error("Error fetching shorts ", error);
//     throw error.response?.data?.message || "Newsshorts Failed";
//   }
// };

// // Get all news articles
// export const allNews = async () => {
//   try {
//     const response = await axios.get(API_END_POINT.ALL_NEWS);
//     return response.data;
//   } catch (error) {
//     console.error("Error fetching news ", error);
//     throw error.response?.data?.message || "News Failed";
//   }
// };

// // Get a single news article by its ID
// export const getNewsById = async (newsId) => {
//   try {
//     const response = await axios.get(API_END_POINT.GET_NEWS_BY_ID(newsId));
//     return response.data;
//   } catch (error) {
//     console.error(`Error fetching news with ID ${newsId}:`, error);
//     throw error.response?.data?.message || "Failed to fetch news details.";
//   }
// };

// // --- News Interaction Functions ---

// // Add like to a news article
// export const addLikeToNews = async (newsId) => {
//   try {
//     const response = await axios.post(API_END_POINT.LIKE_NEWS(newsId));
//     return response.data;
//   } catch (error) {
//     console.error("Error liking news ", error);
//     throw error.response?.data?.message || "Failed to like news";
//   }
// };

// // Add comment to a news article
// export const addCommentToNews = async (newsId, commentData) => {
//   try {
//     const response = await axios.post(
//       API_END_POINT.COMMENT_ON_NEWS(newsId),
//       commentData
//     );
//     return response.data;
//   } catch (error) {
//     console.error("Error commenting on news ", error);
//     throw error.response?.data?.message || "Failed to add comment";
//   }
// };

// // --- Shorts Interaction Functions ---

// // Add like to a short
// export const addLikeToShort = async (shortId) => {
//   try {
//     const token = localStorage.getItem("token");
//     const response = await axios.post(
//       API_END_POINT.LIKE_SHORT(shortId),
//       {}, // Like request mein body khaali bhejte hain
//       {
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       }
//     );
//     return response.data;
//   } catch (error) {
//     console.error("Error liking short ", error);
//     throw error.response?.data?.message || "Failed to like short";
//   }
// };

// // Add comment to a short
// export const addCommentToShort = async (shortId, commentData) => {
//   try {
//     const token = localStorage.getItem("token");
//     const response = await axios.post(
//       API_END_POINT.COMMENT_ON_SHORT(shortId),
//       commentData, // Comment request mein data bhejte hain
//       {
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       }
//     );
//     return response.data;
//   } catch (error) {
//     console.error("Error commenting on short ", error);
//     throw error.response?.data?.message || "Failed to add comment";
//   }
// }; // <<<<===== YAHAN PAR FUNCTION SAHI SE BAND HO RAHA HAI

// // --- Polls Functions ---

// // Get all polls for the logged-in user
// export const getAllPolls = async () => {
//   try {
//     const token = localStorage.getItem("token");
//     const response = await axios.get(API_END_POINT.POLLS, {
//       headers: {
//         Authorization: `Bearer ${token}`,
//       },
//     });
//     return response.data;
//   } catch (error) {
//     console.error("Error fetching polls:", error);
//     throw error.response?.data?.message || "Failed to fetch polls.";
//   }
// };



// // ✅ YEH NAYA FUNCTION APNI FILE KE AAKHIR MEIN JODEIN
// export const voteOnPoll = async (pollId, voteData) => {
//   try {
//     const token = localStorage.getItem("token");
//     // voteData aesa dikhega: { optionIndex: 1 }
//     const response = await axios.post(
//       API_END_POINT.VOTE_ON_POLL(pollId),
//       voteData,
//       {
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       }
//     );
//     // Server se mila hua updated poll data return karein
//     return response.data; 
//   } catch (error) {
//     console.error(`Error voting on poll ${pollId}:`, error);
//     throw error.response?.data?.message || "Failed to record vote.";
//   }
// };

// export const getTrendingTopics = async () => {
//   console.warn("Using placeholder data for getTrendingTopics. Replace with actual API call.");
//   // Replace this with: const response = await axios.get(API_END_POINT.TRENDING_TOPICS);
//   // return response.data;
//   return Promise.resolve({
//     success: true,
//     data: ['Today\'s Horoscope', 'Your Voice', 'Aarti Chalisa', 'Admissions', 'Archive']
//   });
// };

// export const getVideos = async () => {
//   console.warn("Using placeholder data for getVideos. Replace with actual API call.");
//   // Replace this with your actual API call
//   return Promise.resolve({
//     success: true,
//     data: {
//       mainVideo: { image: 'https://via.placeholder.com/400x250', title: 'Main Video Title from API' },
//       videoList: [
//         { image: 'https://via.placeholder.com/200x120', title: 'Video 1 from API' },
//         { image: 'https://via.placeholder.com/200x120', title: 'Video 2 from API' }
//       ]
//     }
//   });
// }; 
// export const getHeadlines = async () => {
//     console.warn("Using placeholder data for getHeadlines. Replace with actual API call.");
//     // Replace this with your actual API call
//     return Promise.resolve({
//         success: true,
//         data: [
//             { category: 'World', text: 'Headline 1 from API...', image: 'https://via.placeholder.com/100x75' },
//             { category: 'Cricket', text: 'Headline 2 from API...', image: 'https://via.placeholder.com/100x75' }
//         ]
//     });
// };

// export const getHoroscope = async (sign) => {
//     console.warn(`Using placeholder data for getHoroscope for ${sign}. Replace with actual API call.`);
//     // Replace this with your actual API call: e.g., axios.get(API_END_POINT.HOROSCOPE(sign))
//     const horoscopes = {
//         'Aries': { name: 'Aries', description: 'API says: An energetic day awaits Aries.' },
//         'Taurus': { name: 'Taurus', description: 'API says: A happy day for Taurus family.' },
//         // ... other signs
//     };
//     return Promise.resolve({
//         success: true,
//         data: horoscopes[sign] || horoscopes['Aries']
//     });
// };


import axios from "axios";
import { API_END_POINT } from "./authRoutes";

// ======================================================================
// --- User Authentication Functions ---
// ======================================================================

// Logs in a user.
export const userLogin = async (email, password) => {
  try {
    const response = await axios.post(API_END_POINT.LOGIN, { email, password });
    return response.data;
  } catch (error) {
    console.error("Error in login:", error.response?.data || error.message);
    throw error.response?.data?.message || "Login failed";
  }
};
// ======================================================================

// Registers a new user.
export const userRegister = async (data) => {
  try {
    const response = await axios.post(API_END_POINT.REGISTER, data);
    return response.data;
  } catch (error) {
    console.error("Error in register:", error.response?.data || error.message);
    throw error.response?.data?.message || "Registration failed";
  }
};
// ======================================================================


// ======================================================================
// --- Content Fetching Functions ---
// ======================================================================

// Fetches headlines.
export const headline = async () => {
  try {
    const response = await axios.get(API_END_POINT.HEADLINE);
    return response.data;
  } catch (error) {
    console.error("Error fetching headline:", error.response?.data || error.message);
    throw error.response?.data?.message || "Headline fetch failed.";
  }
};
// ======================================================================

// Fetches all shorts for the logged-in user.
export const newsshorts = async () => {
  try {
    const token = localStorage.getItem("token");
    const response = await axios.get(API_END_POINT.NEWSSHORTS, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching shorts:", error.response?.data || error.message);
    throw error.response?.data?.message || "Newsshorts fetch failed";
  }
};
// ======================================================================

// Fetches all news articles.
export const allNews = async () => {
  try {
    const response = await axios.get(API_END_POINT.ALL_NEWS);
    return response.data;
  } catch (error) {
    console.error("Error fetching news:", error.response?.data || error.message);
    throw error.response?.data?.message || "News fetch failed";
  }
};
// ======================================================================

// Fetches a single news article by its ID.
export const getNewsById = async (newsId) => {
  try {
    const response = await axios.get(API_END_POINT.GET_NEWS_BY_ID(newsId));
    return response.data;
  } catch (error) {
    console.error(`Error fetching news with ID ${newsId}:`, error.response?.data || error.message);
    throw error.response?.data?.message || "Failed to fetch news details.";
  }
};
// ======================================================================


// ======================================================================
// --- News Interaction Functions ---
// ======================================================================

// Adds a like to a news article.
export const addLikeToNews = async (newsId) => {
  try {
    const response = await axios.post(API_END_POINT.LIKE_NEWS(newsId));
    return response.data;
  } catch (error) {
    console.error("Error liking news:", error.response?.data || error.message);
    throw error.response?.data?.message || "Failed to like news";
  }
};
// ======================================================================

// Adds a comment to a news article.
// export const addCommentToNews = async (newsId, commentData) => {
//   try {
//     const response = await axios.post(API_END_POINT.COMMENT_ON_NEWS(newsId), commentData);
//     return response.data;
//   } catch (error) {
//     console.error("Error commenting on news:", error.response?.data || error.message);
//     throw error.response?.data?.message || "Failed to add comment";
//   }
// };

export const addCommentToNews = async (newsId, commentData) => {
  try {
    const token = localStorage.getItem("token");
    const response = await axios.post(
      API_END_POINT.COMMENT_ON_NEWS(newsId),
      commentData,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error commenting on news:", error.response?.data || error.message);
    throw error.response?.data?.message || "Failed to add comment";
  }
};
// ======================================================================


// ======================================================================
// --- Shorts Interaction Functions ---
// ======================================================================

// Adds a like to a short.
export const addLikeToShort = async (shortId) => {
  try {
    const token = localStorage.getItem("token");
    const response = await axios.post(
      API_END_POINT.LIKE_SHORT(shortId),
      {},
      { headers: { Authorization: `Bearer ${token}` } }
    );
    return response.data;
  } catch (error) {
    console.error("Error liking short:", error.response?.data || error.message);
    throw error.response?.data?.message || "Failed to like short";
  }
};
// ======================================================================

// Adds a comment to a short.
export const addCommentToShort = async (shortId, commentData) => {
  try {
    const token = localStorage.getItem("token");
    const response = await axios.post(
      API_END_POINT.COMMENT_ON_SHORT(shortId),
      commentData,
      { headers: { Authorization: `Bearer ${token}` } }
    );
    return response.data;
  } catch (error) {
    console.error("Error commenting on short:", error.response?.data || error.message);
    throw error.response?.data?.message || "Failed to add comment";
  }
};
// ======================================================================

// export const getCommentsByShortId = async (shortId) => {
//   const token = localStorage.getItem("token");
//   const response = await axios.get(`${  API_END_POINT}/shorts/${shortId}/comment`, {
//     headers: {
//       Authorization: `Bearer ${token}`
//     }
//   });
//   return response.data;
// };

export const getCommentsForShort = async (shortId) => {
  try {
    const token = localStorage.getItem("token");
    const response = await axios.get(
      API_END_POINT.GET_COMMENTS_FOR_SHORT(shortId),
      { headers: { Authorization: `Bearer ${token}` } }
    );
    // आपका API रिस्पांस { success: true, count: N, data: commentsArray } है।
    // तो हम सीधे response.data को रिटर्न करेंगे।
    return response.data;
  } catch (error) {
    console.error("Error fetching comments for short:", error.response?.data || error.message);
    throw error.response?.data?.message || "Failed to fetch comments";
  }
};

// ======================================================================
// --- Polls Functions ---
// ======================================================================

// Fetches all active polls for the logged-in user.
export const getAllPolls = async () => {
  try {
    const token = localStorage.getItem("token");
    const response = await axios.get(API_END_POINT.POLLS, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching polls:", error.response?.data || error.message);
    throw error.response?.data?.message || "Failed to fetch polls.";
  }
};
// ======================================================================

// Submits a vote on a specific poll.
export const voteOnPoll = async (pollId, voteData) => {
  try {
    const token = localStorage.getItem("token");
    const response = await axios.post(
      API_END_POINT.VOTE_ON_POLL(pollId),
      voteData,
      { headers: { Authorization: `Bearer ${token}` } }
    );
    return response.data; 
  } catch (error) {
    console.error(`Error voting on poll ${pollId}:`, error.response?.data || error.message);
    throw error.response?.data?.message || "Failed to record vote.";
  }
};
// ======================================================================


// ======================================================================
// --- Placeholder API Functions for Sidebar (Dummy Data) ---
// ======================================================================

// Fetches trending topics (placeholder).
export const getTrendingTopics = async () => {
  console.warn("Using placeholder data for getTrendingTopics. Replace with actual API call.");
  return Promise.resolve({
    success: true,
    data: ['Today\'s Horoscope', 'Your Voice', 'Aarti Chalisa', 'Admissions', 'Archive']
  });
};
// ======================================================================

// Fetches videos (placeholder).
export const getVideos = async () => {
  console.warn("Using placeholder data for getVideos. Replace with actual API call.");
  return Promise.resolve({
    success: true,
    data: {
      mainVideo: { image: 'https://via.placeholder.com/400x250', title: 'Main Video Title from API' },
      videoList: [
        { image: 'https://via.placeholder.com/200x120', title: 'Video 1 from API' },
        { image: 'https://via.placeholder.com/200x120', title: 'Video 2 from API' }
      ]
    }
  });
};
// ======================================================================

// Fetches headlines (placeholder).
export const getHeadlines = async () => {
    console.warn("Using placeholder data for getHeadlines. Replace with actual API call.");
    return Promise.resolve({
        success: true,
        data: [
            { category: 'World', text: 'Headline 1 from API...', image: 'https://via.placeholder.com/100x75' },
            { category: 'Cricket', text: 'Headline 2 from API...', image: 'https://via.placeholder.com/100x75' }
        ]
    });
};
// ======================================================================

// Fetches horoscope data for a specific sign (placeholder).
export const getHoroscope = async (sign) => {
    console.warn(`Using placeholder data for getHoroscope for ${sign}. Replace with actual API call.`);
    const horoscopes = {
        'Aries': { name: 'Aries', description: 'API says: An energetic day awaits Aries.' },
        'Taurus': { name: 'Taurus', description: 'API says: A happy day for Taurus family.' },
        // ... add other signs as needed for placeholder
    };
    return Promise.resolve({
        success: true,
        data: horoscopes[sign] || horoscopes['Aries']
    });
};
// ======================================================================


// Fetch all countries
export const getCountries = async () => {
  try {
    const response = await axios.get( API_END_POINT.GET_COUNTRIES);
    return response.data;
  } catch (error) {
    console.error("Failed to fetch countries:", error);
    throw error?.response?.data || { message: "Error fetching countries" };
  }
};

// Fetch states by country ID
export const getStatesByCountry = async (countryId) => {
  try {
    const url =  API_END_POINT.GET_STATES_BY_COUNTRY(countryId);
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.error(`Failed to fetch states for country ${countryId}:`, error);
    throw error?.response?.data || { message: "Error fetching states" };
  }
};

// Fetch cities by state ID
export const getCitiesByState = async (stateId) => {
  try {
    const url =  API_END_POINT.GET_CITIES_BY_STATE(stateId);
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.error(`Failed to fetch cities for state ${stateId}:`, error);
    throw error?.response?.data || { message: "Error fetching cities" };
  }
};
