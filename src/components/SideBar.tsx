import '../styles/sidebar.scss';
import { Button } from '../components/Button';

interface SideBarProps {
  selectedGenreId: number;
  handleClickButton: (id: number) => any;
  genres: Genre[];
}

interface Genre {
  id: number;
  name: 'action' | 'comedy' | 'documentary' | 'drama' | 'horror' | 'family';
  title: string;
}

export function SideBar({ selectedGenreId, handleClickButton, genres }: SideBarProps) {
  return <nav className="sidebar">
          <span>Watch<p>Me</p></span>

          <div className="buttons-container">
            {genres.map(genre => (
              <Button
                key={String(genre.id)}
                title={genre.title}
                iconName={genre.name}
                onClick={() => handleClickButton(genre.id)}
                selected={selectedGenreId === genre.id}
              />
            ))}
          </div>
        </nav>
}