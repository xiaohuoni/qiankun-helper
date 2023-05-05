import { MicroAppLink } from 'umi';

export default function HomePage() {
  return (
    <div>
      Slave Home Page
      <li>
        <MicroAppLink to="/home" isMaster>
          goto master
        </MicroAppLink>
      </li>
    </div>
  );
}
