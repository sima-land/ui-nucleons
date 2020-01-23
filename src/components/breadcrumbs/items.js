const items = [
  {
    name: 'Root',
    url: '/root_path',
  },
  {
    name: 'First Level',
    url: '/first_level_path',
    isActive: false,
    items: [
      {
        name: 'First Level Previous Sibling',
        url: '/first_level_previous_sibling_path',
        isActive: false,
      },
      {
        name: 'First Level',
        url: '/first_level_path',
        isActive: true,
      },
      {
        name: 'First Level Next Sibling',
        url: '/first_level_next_sibling_path',
        isActive: false,
      },
      {
        name: 'First Level Next Sibling',
        url: '/first_level_next_sibling_path',
        isActive: false,
      },
      {
        name: 'First Level Next Sibling',
        url: '/first_level_next_sibling_path',
        isActive: false,
      },
      {
        name: 'First Level Next Sibling',
        url: '/first_level_next_sibling_path',
        isActive: false,
      },
      {
        name: 'First Level Next Sibling',
        url: '/first_level_next_sibling_path',
        isActive: false,
      },
    ],
  },
  {
    name: 'Second Level',
    url: '/second_level_path',
    isActive: false,
    items: [
      {
        name: 'Second Level Previous Sibling',
        url: '/second_level_previous_sibling_path',
        isActive: false,
      },
      {
        name: 'Second Level',
        url: '/second_level_path',
        isActive: true,
      },
    ],
  },
  {
    name: 'Third Level',
    url: '/third_level_path',
    isActive: true,
    items: [
      {
        name: 'Third Level',
        url: '/third_level_path',
        isActive: true,
      },
      {
        name: 'Third Level Next Sibling',
        url: '/third_level_next_sibling_path',
        isActive: false,
      },
    ],
  },
  {
    name: 'Fourth Level',
    url: '/first_level_path',
    isActive: false,
    items: [
      {
        name: 'Fourth Level Previous Sibling',
        url: '/fourth_level_previous_sibling_path',
        isActive: false,
      },
      {
        name: 'Fourth Level',
        url: '/fourth_level_path',
        isActive: true,
      },
      {
        name: 'Fourth Level Next Sibling',
        url: '/fourth_level_next_sibling_path',
        isActive: false,
      },
      {
        name: 'Fourth Level Next Sibling',
        url: '/fourth_level_next_sibling_path',
        isActive: false,
      },
      {
        name: 'Fourth Level Next Sibling',
        url: '/Fourth_level_next_sibling_path',
        isActive: false,
      },
      {
        name: 'Fourth Level Next Sibling',
        url: '/fourth_level_next_sibling_path',
        isActive: false,
      },
      {
        name: 'Fourth Level Next Sibling',
        url: '/fourth_level_next_sibling_path',
        isActive: false,
      },
    ],
  },
  {
    name: 'Fifth Level',
    url: '/fifth_level_path',
    isActive: false,
    items: [
      {
        name: 'Fifth Level Previous Sibling',
        url: '/fifth_level_previous_sibling_path',
        isActive: false,
      },
      {
        name: 'Fifth Level',
        url: '/fifth_level_path',
        isActive: true,
      },
    ],
  },
  {
    name: 'Sixth Level',
    url: '/sixth_level_path',
    isActive: true,
    items: [
      {
        name: 'Sixth Level',
        url: '/sixth_level_path',
        isActive: true,
      },
      {
        name: 'Sixth Level Next Sibling',
        url: '/sixth_level_next_sibling_path',
        isActive: false,
      },
    ],
  },
];

export default items;
