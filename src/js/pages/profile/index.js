import userProfile from './userProfile.js';
import profileImage from './profileImage.js';
import openEditProfile from './openEditProfile.js';
import userListings from './userListings/index.js'
import storage from '../../helpers/storage.js';
import getProfile from '../../api/auth/requests/getProfile.js';

const params = new URLSearchParams(window.location.search);
let name = params.get("name");
const profileInfo = storage.get("profile");

if (!profileInfo) window.location.href = "/";

let isOwner;
if (!name) {
  isOwner = true;
  name = profileInfo.name;
}
const profile = await getProfile(name);

isOwner = profile?.name === profileInfo.name ? true : false;

userListings(name);
userProfile(profile, isOwner);
profileImage();
openEditProfile();




