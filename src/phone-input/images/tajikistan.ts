const src =
  'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAMAAADVRocKAAAC+lBMVEVHcEzm5ub////n5+fu7u7////m5ubm5ubm5ubm5ubn5+fm5ubl5eXm5ubm5ub////n5+fm5ubm5ubm5ubm5ubm5ubm5ubn5+fm5ubn5+fm5ubm5ubg4ODm5ubn5+fm5ubm5ubm5ubn5+fr6+vn5+fm5ubn5+fm5ubm5ubn5+fk5OTm5ubm5ubV1dXm5ubl5eXm5ubm5ubm5ubm5ubt7e3n5+fm5ubo6Ojm5ubn5+fm5ubm5ubm5ubm5ubn5+fl5eXn5+f////m5ubm5ubl5eXm5ubm5ubo6Ojl5eXo6Oj////aKRwAejPm5ub2vgD+/v73xRz2vwP//PXy8vICezXaKx7+++/744///v3///763Hbu7u79/f339/f++egEfDb86q33xyL62m73xBj//ff978D989Dm4eHbLSD4zTn3yCn85pz++u362Wj3xh72wQv7+/v6+vrbNCfm397aKh3//PLg4+H//vtrrIb+9tz98s375ZX++eb3wxP51Vv74IX734JQn3GmyLQPgT+qyrf4ySv+9dZToXT74Yr99NL62GT62mz50Eb8/Pz29vbr6+vo6Oj4yzLq6urH187eaF/kysflzMrfeXLc4t7K2dD87LP86KT501H2wAj+9tnh5OL2vwL99NT74o01k1363n7//fn97r7jrKj87LXfgXrhlpHkxcMOgT52sY/bPjPjsq/ir6vC1crbOCwbh0gBezRjqIDebGPgg31vroncQzjebGT856AUg0P++OT98MYhikz51Ff3yCfkw8DfgHn63XiRvqS80sX51FT623D4zjz4yi/745L511/63Xv86an62Gfz8/N7tJPgiIHhjIb+994ojVL87LbcSD34zDX4z0HaNCjcSj/867HdVkzdUkjhn5r98cr++uz3wg/98MQZhkbgf3ehxbDbMyfP29Tl0tEFfTeixrHgh4Hhk4350lC908aGuZuFuJrkzcwqjlTjtLBsrYfl3NvfdW3js7DjtbFcpXuJup4pjVNwr4rH9GR7AAAASnRSTlMAMwTSDwFi/vns295YTcoCqO3NxmXU80NcNff2EI4f+5ETiQxJwku//MY5R08G0KmEmoJaDkrqIapV1eBSq147ngWi7oDxMhY6C16Fr1YAAAbYSURB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';
export default src;
