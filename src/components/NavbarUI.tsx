import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
} from '@nextui-org/react';
import Blue from '@/assets/Blue.svg?react';
import { useSelector, useDispatch } from 'react-redux';
import { makeTrue, setClickedItem } from '@/store/stateSlice.ts';

const NavbarUI = () => {
  const dispatch = useDispatch();
  const isClicked = useSelector((state: any) => state.clickState.isClicked);

  const handleClickedItem = (
    item: '게시판' | '서비스 02' | '서비스 03' | null,
  ) => {
    dispatch(setClickedItem(item));
    dispatch(makeTrue());
  };

  return (
    <Navbar>
      <NavbarBrand>
        <Link href="/">
          <Blue className="w-20 hover:cursor-pointer" />
        </Link>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Link
            color={isClicked === '게시판' ? 'primary' : 'foreground'}
            href="/board"
            onClick={() => {
              handleClickedItem('게시판');
            }}
            className={`${isClicked === '게시판' ? 'border-b-2 border-gray-300' : ''}`}
          >
            게시판
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            color={isClicked === '서비스 02' ? 'primary' : 'foreground'}
            href="/service02"
            onClick={() => handleClickedItem('서비스 02')}
            className={`${isClicked === '서비스 02' ? 'border-b-2 border-gray-300' : ''}`}
          >
            서비스 02
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            color={isClicked === '서비스 03' ? 'primary' : 'foreground'}
            href="/service03"
            onClick={() => handleClickedItem('서비스 03')}
            className={`${isClicked === '서비스 03' ? 'border-b-2 border-gray-300' : ''}`}
          >
            서비스 03
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem>
          <Button
            as={Link}
            color="primary"
            href="/login"
            variant="flat"
            className="h-8"
          >
            로그인
          </Button>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
};

export default NavbarUI;
