<template>
  <div id="navbar">
    <ul>
      <li>
        <Tooltip content="首页" placement="right">
          <router-link to="/">
            <Icon type="md-home" size="40"/>
          </router-link>
        </Tooltip>
      </li>
      <li>
        <Tooltip content="文章" placement="right">
          <router-link to="/article">
            <Icon type="ios-book" size="40"/>
          </router-link>
        </Tooltip>
      </li>
      <li>
        <Tooltip content="相册" placement="right">
          <router-link to="/photo">
            <Icon type="md-image" size="40"/>
          </router-link>
        </Tooltip>
      </li>
      <li>
        <Tooltip content="关于" placement="right">
          <router-link to="/about">
            <Icon type="ios-alert" size="40"/>
          </router-link>
        </Tooltip>
      </li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
#navbar {
  text-align: center;
  ul {
    padding: 0;
    li {
      vertical-align: middle;
      line-height: 80px;
      list-style-type: none;
      a {
        text-decoration: none;
        color: #000;
      }
    }
    li:hover {
      background-color: #919191;
    }
  }
}
</style>
