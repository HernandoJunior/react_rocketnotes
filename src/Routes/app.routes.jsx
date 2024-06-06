import { Routes, Route } from 'react-router-dom';
//Pages
import { NewNotes } from '../pages/NewNotes'
import { Details } from '../pages/Details'
import { Home } from '../pages/Home'
import { Profile } from '../pages/Profile'

export function AppRoutes(){
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/newnotes" element={<NewNotes />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/details/:id" element={<Details />} />
    </Routes>
  )
}