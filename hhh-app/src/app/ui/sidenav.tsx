import Link from 'next/link';
import NavLinks from '@/app/ui/dashboardnav-links';
import { PowerIcon } from '@heroicons/react/24/outline';
import { signOut } from '@/auth';
export default function SideNav() {
  return (
    <nav className="lx um yr">
      <ul role="list" className="lx um yr aav">
  
      <NavLinks />
        <div className="awb awf awo ayb"></div>
        
        <li className="lp">
          <form action={async () => {
              'use server';
              await signOut();
            }}>
            <button className="bqe ga lx aaf adu aqp avz awf awo ayb biu blt">
              <PowerIcon className="oc se ur ayb brz" />
              <div className="hidden md:block">Sign Out</div>
            </button>
          </form>
        </li>
        </ul>
    </nav>
  );
}
