## iOder
-An online ordering system
-course project of KTH ID2216

## React + TypeScript + Vite + Ant Design + Zustand

- use a React mobile template from https://github.com/xmllein/react-mobile

##  Project tech stack

- [x] react-router-dom 6.x
- [x] antd-mobile 5.x
- [x] zustand 4.x
- [x] axios
- [x] sass
- [x] postcss-pxtorem
- [x] vite-plugin-mock
- [x] mockjs
- [x] husky 

## References

- [React](https://react.dev/)
- [React 中文文档](https://react.docschina.org/)
- [React Router](https://reactrouter.com/)
- [antd-mobile](https://mobile.ant.design/zh/guide/quick-start/)
- [zustand](https://docs.pmnd.rs/zustand/getting-started/introduction)



```
react-mobile
├─ .cz-config.js
├─ .env.development
├─ .env.production
├─ .env.test
├─ .eslintrc.cjs
├─ .git
│  ├─ COMMIT_EDITMSG
│  ├─ config
│  ├─ description
│  ├─ FETCH_HEAD
│  ├─ HEAD
│  ├─ hooks
│  │  ├─ applypatch-msg.sample
│  │  ├─ commit-msg.sample
│  │  ├─ fsmonitor-watchman.sample
│  │  ├─ post-update.sample
│  │  ├─ pre-applypatch.sample
│  │  ├─ pre-commit.sample
│  │  ├─ pre-merge-commit.sample
│  │  ├─ pre-push.sample
│  │  ├─ pre-rebase.sample
│  │  ├─ pre-receive.sample
│  │  ├─ prepare-commit-msg.sample
│  │  ├─ push-to-checkout.sample
│  │  ├─ sendemail-validate.sample
│  │  └─ update.sample
│  ├─ index
│  ├─ info
│  │  └─ exclude
│  ├─ objects
│  │  ├─ 00
│  │  │  └─ 14895c07f324c3de0eb3942bbd21ef5152c0f5
│  │  ├─ 07
│  │  │  └─ 6166697aeb31f074bb05e45c08ce6c9a4521c7
│  │  ├─ 08
│  │  │  └─ eb6094e046d9b61f118b345a5bf7a0523fe76b
│  │  ├─ 0a
│  │  │  └─ 2bd071e4ae187e46fd679eeb4e476c1acbfa07
│  │  ├─ 0b
│  │  │  └─ 67485984660fa7445fb8f5093c639c9f425962
│  │  ├─ 0f
│  │  │  └─ a33d4a852aa7dc73e32988774bdd3a9b0d8b16
│  │  ├─ 10
│  │  │  └─ 109ddb335ced0f0976fe1965b6fb4f3db9cd1e
│  │  ├─ 11
│  │  │  └─ f02fe2a0061d6e6e1f271b21da95423b448b32
│  │  ├─ 12
│  │  │  ├─ 36059f9dfa0bb76a2f93c63cef9573c04f4a28
│  │  │  └─ 577aafd702e4f30acba4777d5e0521114d2080
│  │  ├─ 15
│  │  │  └─ 2598269915f95550b73f3ac153bf310fa73eb4
│  │  ├─ 17
│  │  │  └─ 1b2b050373932d22d1f1cc4977a44b56db2a82
│  │  ├─ 19
│  │  │  └─ 51c547442b31cbbd3fd3440c56006acf88edc6
│  │  ├─ 1a
│  │  │  └─ e72af680c56358cd9d983cab77e72dbcfaea90
│  │  ├─ 1b
│  │  │  └─ 102faca21e05ca07ec06a6a116eaabce052ea9
│  │  ├─ 1c
│  │  │  └─ d78e53a28d478ef74833fa35b414e7578ccf11
│  │  ├─ 1d
│  │  │  └─ 974e9ff2faa9ff3a852f3ad0c9ffa6665542f7
│  │  ├─ 1e
│  │  │  └─ adf81e3e9ee327591320b8abad78a055e967ab
│  │  ├─ 20
│  │  │  └─ 0ba04cc22d747f32e25ec37d0cc00337cffcef
│  │  ├─ 21
│  │  │  ├─ 73c26bb5b4b8e40b0a0d0cfba328222144e484
│  │  │  └─ e2d5e307507d43eb0aac185d801706e90dbb16
│  │  ├─ 23
│  │  │  └─ a16f4cddeccd643a16fc99891443bbae322189
│  │  ├─ 24
│  │  │  ├─ 71c1046d716f56d9377f21ec7bb01cf612784c
│  │  │  └─ 846424baf1699c0007690ef3b2925fff682db4
│  │  ├─ 25
│  │  │  └─ 947f5b10d64d86af57ccac353e722aa2d6214f
│  │  ├─ 27
│  │  │  ├─ 9691593674c1a52bb07f04044c7599087a2a43
│  │  │  └─ a79799fda9ffa8044d42fb4c30be87f80d0be1
│  │  ├─ 28
│  │  │  └─ 01fa7d7de287f0a1fcbf3534b9114ec7c7d959
│  │  ├─ 29
│  │  │  ├─ 5325a49f8835a68b33a22e7eb7dc2fc17ba5dd
│  │  │  └─ b2fb86b26246fbac9865b358c8f456dd0f70b3
│  │  ├─ 2a
│  │  │  └─ c5d4a5a1d597dcf96f48de563ad5fada2d3c0f
│  │  ├─ 2b
│  │  │  └─ e179acb0064bc677c125833f74e4d86ae3ab25
│  │  ├─ 2c
│  │  │  └─ 03f1340604ce9dd7688a74dd8c421e706b00d8
│  │  ├─ 2d
│  │  │  └─ 28ac8a33a7db11017eae3a3cc03cec74028fb8
│  │  ├─ 2e
│  │  │  └─ 2f03fba2e159fd246514de10f2dfd52facaed8
│  │  ├─ 2f
│  │  │  ├─ e4246d3fc624166d6c4f8761e5e583514a4bc2
│  │  │  └─ ee78a202618220aba0c954b0d5fc9fed87af5e
│  │  ├─ 30
│  │  │  ├─ 32e73c4996ca0265b1e0c3d02b4b9706fe1c65
│  │  │  └─ cc593e6b968d0f0fe602f50c239b13258f6a39
│  │  ├─ 31
│  │  │  └─ b8d82f2d5afa87329fecae4aa904d62fb06656
│  │  ├─ 32
│  │  │  └─ 30e205deeb46e5a812315e72bf4bcad35de2d0
│  │  ├─ 34
│  │  │  └─ b5148182989e9f52d8d671d5244aec398bfb3f
│  │  ├─ 35
│  │  │  ├─ 393f66c3d826fbefcdf606bc14981c058b737a
│  │  │  └─ 4d220ec4871fce4c5191402a08a510f332ae66
│  │  ├─ 38
│  │  │  └─ 9b075cd8ea7a3904e525e5183418d9505ca0ee
│  │  ├─ 3a
│  │  │  └─ 4989819e479cbf07259f9a9ae7e6c7f75f9624
│  │  ├─ 3c
│  │  │  └─ 6f025edf5387cd487187e7160657b8cc6af1af
│  │  ├─ 3f
│  │  │  └─ 9c1a73dc1cbde5b1e99245602295844ab657ae
│  │  ├─ 40
│  │  │  └─ 1183b4f10e2d7f421f8a448b5dab19d9ca40fb
│  │  ├─ 41
│  │  │  └─ 08ae05bd68be68ccaa6bb7a53edb052e37e304
│  │  ├─ 42
│  │  │  ├─ 872c59f5b01c9155864572bc2fbd5833a7406c
│  │  │  └─ ab33791e498f1281d7bfcffc09a6e23e5426d4
│  │  ├─ 43
│  │  │  └─ 4cc2162d35e9d4c4e1b3f60643b3cbca049d6c
│  │  ├─ 45
│  │  │  ├─ 616088b65e552ff35047a96466af4c0457e902
│  │  │  └─ 8635286a52c3d540d45ebe61c4d043020d560b
│  │  ├─ 46
│  │  │  ├─ 6c1a526432340c49814363f6acf5079ac7b747
│  │  │  └─ b79d3ea398fa514a86f48e4c4b300516401e18
│  │  ├─ 47
│  │  │  └─ 4d90c0372c9d69479a443a05cb5234f927e32b
│  │  ├─ 49
│  │  │  └─ 143eb30025d382700e91b6ff83a7cf122fcb3c
│  │  ├─ 4a
│  │  │  ├─ 7fe8790455b4bcbeb9cdb192b4846abeea892d
│  │  │  └─ e41dfd7736dc2a8d33a3ee6062186ff616ab03
│  │  ├─ 4d
│  │  │  └─ 18e9bfe422df19e083a7c37d0f0527984b2222
│  │  ├─ 4e
│  │  │  ├─ 4f8669b3a600cd7163c3334ab1b812005ca09c
│  │  │  └─ ea4baa6361cad5a1603cf9dd93b5632237008e
│  │  ├─ 4f
│  │  │  └─ 1bd5cb5220bece69473fd85b0c02dd7c34593f
│  │  ├─ 51
│  │  │  └─ aa6809934752096a49123f39ec947fb5d111b5
│  │  ├─ 53
│  │  │  └─ 1fa75e142314e9634e0f10af851a4e5be572a3
│  │  ├─ 54
│  │  │  └─ e366adb433a79619cc369a7883500062bbee93
│  │  ├─ 59
│  │  │  ├─ a83d87000112ee9d17c02c5efe10bd37c79227
│  │  │  └─ b75ab6492336e660df6d6754b45de71fe6b8fc
│  │  ├─ 5a
│  │  │  └─ 34abb686b6da61d58123d64855534ceaaa3945
│  │  ├─ 5d
│  │  │  └─ b5a7ba5e331bbb16aa2c551bed07fc6ed2336d
│  │  ├─ 5f
│  │  │  ├─ 6f341ee40c596a5f1971ba105b6dd95b0aa0b8
│  │  │  ├─ b80708424025c14d67512ccaee939f8221f198
│  │  │  └─ ecaff4f61a27e16dbc66b0f8a75fdc7023437b
│  │  ├─ 61
│  │  │  ├─ 886721bb6d69cf6afbf497c50e698a6155f8ad
│  │  │  └─ febb7f63b7d3cf06bf34f9033df18c2dc53ef9
│  │  ├─ 68
│  │  │  └─ dc318fe067748b584e48481fd7ebc27c307020
│  │  ├─ 69
│  │  │  ├─ 1ac6d4cd03379b0a811410be46d2fb87432ce3
│  │  │  └─ 414371b7053971e0cde0c6c6a6e0a476c18492
│  │  ├─ 6a
│  │  │  └─ b43e935687056499459cafe7a224c600984e7f
│  │  ├─ 6c
│  │  │  └─ 87de9bb3358469122cc991d5cf578927246184
│  │  ├─ 73
│  │  │  └─ e356282e1c3647be43d20f5c6c4f4f45c7b9b3
│  │  ├─ 75
│  │  │  └─ af38790b9c290dd6127bd162641337d9e0d17e
│  │  ├─ 78
│  │  │  └─ 6cf53014ee53f1a2f11862f859b2c1889114b7
│  │  ├─ 7b
│  │  │  └─ ca689645363f6493b15f1efc55260eb2811e51
│  │  ├─ 7c
│  │  │  └─ 82de5da70743ecdca2eed9255a5907bda6a620
│  │  ├─ 7d
│  │  │  ├─ 14a8fdac9e8170aa93c48e66afacb18f31faec
│  │  │  └─ f01c12a0e9b6f2468b4f12326dbbad42378229
│  │  ├─ 7e
│  │  │  └─ 5cef0e3f50a8cdf76b7f98e8d68ec97466f25b
│  │  ├─ 80
│  │  │  ├─ 415692c2e5ad4ced038dc6081b50f14ab457a5
│  │  │  └─ 7a03c2d09c6ab6ef903e0dd01a64a3f26841bc
│  │  ├─ 81
│  │  │  └─ 50e2143e95c6374891e6c8a2ec8e00d3d97883
│  │  ├─ 86
│  │  │  └─ 5207b53ef39cfdcfd579067e9787d20c796583
│  │  ├─ 89
│  │  │  ├─ 7eda4ac0e293b6b938da32616918fe9f1c8ab6
│  │  │  └─ 97299d3ca8fe915a6bd6ce0376e82f4c465fa8
│  │  ├─ 8a
│  │  │  └─ 60b81f35b08b492cdc0748152d23b4d5b60067
│  │  ├─ 8b
│  │  │  ├─ 07b1382c8684e05f4799476718e673f4a282fc
│  │  │  └─ 2501aeb03b0e84146dbdfa0cc0a471e51583a9
│  │  ├─ 8d
│  │  │  └─ da39345f68968703fe4ae8fd251e52d5526372
│  │  ├─ 91
│  │  │  ├─ 7339a6170d9d85b5ca08d0f45124204b3d5c21
│  │  │  ├─ a76bbfaed64233dddceeb1b68ad2af040b2a1b
│  │  │  └─ eb432e89813cee165a44f2aae9e9fb65064f8b
│  │  ├─ 93
│  │  │  └─ fbded8f7c7e2dff20b9685e3bc9ac9d840fe06
│  │  ├─ 95
│  │  │  └─ ea13b8f16554064c74e76cb25ab568c49046ba
│  │  ├─ 96
│  │  │  └─ 7161ea01236e55cfd214e897273ab0a20e3c77
│  │  ├─ 97
│  │  │  └─ f1d30f14d4a7510287e35e64f5b15ebf723639
│  │  ├─ 99
│  │  │  └─ 788be8a15411318db47d3c6cdadf6a251fa27f
│  │  ├─ 9a
│  │  │  ├─ a7d7cf279e24c29b498699438c20002e58ddf5
│  │  │  └─ d77c5d926cd569780c5f00715523e02eb21d08
│  │  ├─ 9c
│  │  │  └─ 385b74cd6e38937e3eabcefe745ebe88ee668e
│  │  ├─ 9d
│  │  │  ├─ 5d711514deed59915ff4e00ed7de402cfdb9e6
│  │  │  ├─ a244ad185d562056b3a16c87481f35ea3d5f24
│  │  │  └─ c59a7263146607e15b30ebf72d145541ad36fb
│  │  ├─ 9e
│  │  │  └─ afb2b4ed77d400abcf77ba6154cb384a4429fd
│  │  ├─ 9f
│  │  │  └─ 2975de5ad63c259b4672efa7b6c074faf41985
│  │  ├─ a0
│  │  │  ├─ 640f0c4e6764e6daefae5cfa66f90412900531
│  │  │  └─ b19644406466cb30e327a119e500a45f7e4ef3
│  │  ├─ a1
│  │  │  └─ 0c54c7a4466a8593e453a1066803e4fa78f520
│  │  ├─ a2
│  │  │  └─ c64c49c95a0041fb75f4629ca6973646732eb4
│  │  ├─ a3
│  │  │  └─ f1bd5092dc2fc55609859a7e957cc49370b3a2
│  │  ├─ a4
│  │  │  └─ e18cffb980f292406663d473498613208624dd
│  │  ├─ a5
│  │  │  ├─ 47bf36d8d11a4f89c59c144f24795749086dd1
│  │  │  ├─ c8825cd50bd88d1c3c2c611b6bbc9decc445b9
│  │  │  └─ fbbcef8d0f3d443a2428ccc567baf245758d61
│  │  ├─ a9
│  │  │  └─ 9a87651da69531faf58133a635da766abb3044
│  │  ├─ ad
│  │  │  └─ 2b418e245c1e794357d06f141de4711329b2a9
│  │  ├─ b3
│  │  │  └─ 88c9d6b57f9abc473cff765edbe78794ed8b98
│  │  ├─ b5
│  │  │  └─ 6767669e630c0d862332e6680e02c198a35bcb
│  │  ├─ b6
│  │  │  └─ 326147142aaaf5800cee9aeb894b0e2690e73a
│  │  ├─ b8
│  │  │  └─ fc5c181089ae32bc131e0b120f1435bf1193bd
│  │  ├─ b9
│  │  │  └─ b2ab1c47c1767f3611ced2d2d54e1fa3d0bd27
│  │  ├─ bd
│  │  │  └─ 26c20d53284ea65649cd060f1cb364523905fb
│  │  ├─ be
│  │  │  └─ 534447d8a4033e9a1a6ecbe760fd9f394bf1d9
│  │  ├─ bf
│  │  │  └─ 2507f18514d25b134e5c9ca429fecd70aba783
│  │  ├─ c0
│  │  │  └─ d2f5060f9f694aad3f90fedbdd22099002f062
│  │  ├─ c1
│  │  │  └─ 466730886284b810a08e56c5fbaf030a1aa11c
│  │  ├─ c2
│  │  │  └─ a3c785a0094b232c7a6fe756e1c1fe2389be99
│  │  ├─ c9
│  │  │  └─ 17b8d004661929c4b20c1010ca1774da5885b2
│  │  ├─ cb
│  │  │  └─ f2d78a8628497e9a33cbf2f0ee8424b9e749eb
│  │  ├─ cf
│  │  │  └─ e614f03f22457bb265ed356202933f378a3e00
│  │  ├─ d1
│  │  │  └─ d87eaadd7916469db7fc7f48193dc440365657
│  │  ├─ d5
│  │  │  └─ 2f6fb529cef995438465ec12e088c3e43b7546
│  │  ├─ da
│  │  │  └─ 32b218391a476dd4240108473f8664ebd11953
│  │  ├─ db
│  │  │  └─ 90e54dca96b484bd96ee542d9119ed5335ad8d
│  │  ├─ dc
│  │  │  ├─ 594cacb04e6d6f40741f690e36f9aad178c0d1
│  │  │  └─ 9d7a6b3eadb223366bfb66989c779749066e18
│  │  ├─ de
│  │  │  └─ 11d35858647c0c42bbf425e6cdc7f480e326a3
│  │  ├─ df
│  │  │  └─ 9f81fce6b967654f4b2d4b00721e704891e29f
│  │  ├─ e0
│  │  │  └─ 2185211688c111b3e0372e8f3f2f80518be11f
│  │  ├─ e4
│  │  │  ├─ 4681585cde52693fce482d5834ba7328eba5bf
│  │  │  └─ b78eae12304a075fa19675c4047061d6ab920d
│  │  ├─ e5
│  │  │  └─ 383ac0733fb609642451999f9311c6eee98151
│  │  ├─ e7
│  │  │  └─ b8dfb1b2a60bd50538bec9f876511b9cac21e3
│  │  ├─ e9
│  │  │  └─ deee9151f0fbbb5653731dd45c1087ff6e9004
│  │  ├─ ea
│  │  │  └─ a057849b16260d5ceb74abb04cead05c056617
│  │  ├─ ed
│  │  │  ├─ 5d53614aa4f7f9394864fbf1d09e606045d11e
│  │  │  └─ 6a6f6d25e72653d5c5a9b64b037dafe2a79db1
│  │  ├─ ee
│  │  │  └─ 7d3e730efcc4cf71a9d959a39c7f95040c8768
│  │  ├─ ef
│  │  │  └─ e6421b4801f692a1301180bc6bdad33b0e2692
│  │  ├─ f2
│  │  │  └─ 16ecb6be973a63b5bcbe4281796ba0c13d8007
│  │  ├─ f4
│  │  │  ├─ 670830485c1f08c580cd83f6fd2e5c4b750053
│  │  │  └─ f32c414b329b039eb868561171469f38bf820f
│  │  ├─ f5
│  │  │  └─ d6c9d6725d5dc0b974ec7e515e869d6d7c23a0
│  │  ├─ f8
│  │  │  └─ 149ea3091aed88e25ace7f7ac6e9c188214426
│  │  ├─ fc
│  │  │  ├─ 8d8ba438facd71abfe84bb330bbc47f73ad31e
│  │  │  ├─ 8dedc2864f1e0543acdc6d2b596d52f85da280
│  │  │  ├─ f1efcb045b7893e293e32ac6160b4e11a33195
│  │  │  └─ f31e8c4d06ff24b886cd76d1f231e13fb61647
│  │  ├─ fd
│  │  │  └─ 6ac1de6339d35431224ac9a455f803bbb1233a
│  │  ├─ ff
│  │  │  ├─ 6bcaf1645da150fb63ef92a0a1f2660cc6cd1f
│  │  │  └─ aaa7a2145fc5ab5b4e16ed32238302a5798f1f
│  │  ├─ info
│  │  └─ pack
│  ├─ ORIG_HEAD
│  └─ refs
│     ├─ heads
│     │  └─ master
│     ├─ remotes
│     │  └─ ioder
│     │     └─ master
│     └─ tags
├─ .github
│  └─ workflows
│     └─ static.yml
├─ .gitignore
├─ .husky
│  ├─ commit-msg
│  ├─ pre-commit
│  └─ _
│     ├─ .gitignore
│     └─ husky.sh
├─ .prettierrc.js
├─ commitlint.config.js
├─ index.html
├─ mock
│  ├─ menu.ts
│  ├─ orderList.ts
│  └─ user.ts
├─ package.json
├─ postcss.config.js
├─ public
│  ├─ loginPage2.png
│  ├─ navigationPage1.png
│  └─ vite.svg
├─ README.md
├─ src
│  ├─ api
│  │  ├─ index.ts
│  │  └─ module
│  │     ├─ history.ts
│  │     ├─ menu.ts
│  │     └─ user.ts
│  ├─ App.tsx
│  ├─ assets
│  │  ├─ react.svg
│  │  └─ styles
│  │     └─ base.scss
│  ├─ Buttom.tsx
│  ├─ components
│  │  ├─ CreateAccount.tsx
│  │  ├─ Detail.tsx
│  │  ├─ ProfileEdit.tsx
│  │  └─ pwdchange.tsx
│  ├─ config
│  │  └─ index.ts
│  ├─ main.tsx
│  ├─ mockProdServer.ts
│  ├─ ResButtom.tsx
│  ├─ router
│  │  └─ index.tsx
│  ├─ store
│  │  └─ index.ts
│  ├─ utils
│  │  ├─ request.ts
│  │  └─ storage.ts
│  ├─ views
│  │  ├─ entrance
│  │  │  ├─ background.scss
│  │  │  └─ index.tsx
│  │  ├─ home
│  │  │  └─ index.tsx
│  │  ├─ layout.module.scss
│  │  ├─ Layout.tsx
│  │  ├─ LayoutRes.tsx
│  │  ├─ login
│  │  │  ├─ login.scss
│  │  │  └─ Login.tsx
│  │  ├─ message
│  │  │  └─ index.tsx
│  │  ├─ my
│  │  │  └─ index.tsx
│  │  ├─ resOrderList
│  │  │  └─ index.tsx
│  │  ├─ restaurantMenu
│  │  │  └─ index.tsx
│  │  └─ todo
│  │     └─ index.tsx
│  └─ vite-env.d.ts
├─ stats.html
├─ tsconfig.json
├─ tsconfig.node.json
├─ types
│  ├─ history.ts
│  ├─ index.ts
│  ├─ menu.ts
│  └─ user.ts
├─ vite.config.ts
├─ vite.config.ts.js
└─ yarn.lock

```