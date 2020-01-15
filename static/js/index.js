var abkAddress = "0xac9756467f593583daae42afaf45944912c9cd97",
	abkAbi = [{"constant":false,"inputs":[],"name":"bigPoolTriggerByOver","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"executeDividentPeriod","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"gameOver","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"cash","type":"uint256"}],"name":"personWithdraw","outputs":[],"payable":true,"stateMutability":"payable","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"cash","type":"uint256"}],"name":"platformWithdraw","outputs":[],"payable":true,"stateMutability":"payable","type":"function"},{"constant":false,"inputs":[],"name":"reenter","outputs":[],"payable":true,"stateMutability":"payable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"referrer","type":"address"}],"name":"reg","outputs":[],"payable":true,"stateMutability":"payable","type":"function"},{"constant":false,"inputs":[],"name":"reg","outputs":[],"payable":true,"stateMutability":"payable","type":"function"},{"payable":true,"stateMutability":"payable","type":"fallback"},{"constant":true,"inputs":[{"internalType":"uint256","name":"eth","type":"uint256"}],"name":"admission_check","outputs":[{"internalType":"bool","name":"result","type":"bool"},{"internalType":"string","name":"reason","type":"string"}],"payable":false,"stateMutability":"pure","type":"function"},{"constant":true,"inputs":[],"name":"can_reg_check","outputs":[{"internalType":"bool","name":"result","type":"bool"},{"internalType":"string","name":"reason","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"gameOverTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"gameStatu","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"referrer","type":"address"}],"name":"refer_valid_check","outputs":[{"internalType":"bool","name":"result","type":"bool"},{"internalType":"string","name":"reason","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"showAmbassadorBonus","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"showBigPool","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"showBigRound","outputs":[{"internalType":"uint16","name":"","type":"uint16"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"showDividentNextTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"showLittePool","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"showLittleRound","outputs":[{"internalType":"uint16","name":"","type":"uint16"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"showNowTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"showOutDifference","outputs":[{"internalType":"uint8","name":"rate","type":"uint8"},{"internalType":"uint256","name":"difference","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"showPersonBonums","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"uint256","name":"time","type":"uint256"}],"name":"showPersonDailyNum","outputs":[{"internalType":"uint16","name":"","type":"uint16"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"showPersonDividentEarn","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"showPersonExist","outputs":[{"internalType":"bool","name":"exist","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"showPersonId","outputs":[{"internalType":"uint16","name":"id","type":"uint16"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"showPersonIsOut","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"showPersonNum","outputs":[{"internalType":"uint16","name":"","type":"uint16"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"showPersonPay","outputs":[{"internalType":"uint16","name":"id","type":"uint16"},{"internalType":"uint256","name":"pay","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"showPersonPoolEarn","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"showPersonReferrerBonus","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"showPersonUnwithdraw","outputs":[{"internalType":"uint256","name":"unwithdraw","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"showPlatformBonus","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"showPoolTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"showPredictEarn","outputs":[{"internalType":"uint256","name":"min","type":"uint256"},{"internalType":"uint256","name":"max","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"showReferrerBonus","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"showRelation","outputs":[{"internalType":"address","name":"referrer","type":"address"},{"internalType":"uint256","name":"num","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"showTotalPay","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"showTotalWiethdraw","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"}],
	// 主網ID：1； ropsten網絡ID：3
	gnetId = 3;

var userAccount = "",
	isStart = false,
	// 如果是循環檢查,則不用反復提示錯誤提示
	isCheckInterval = false,
	// 網絡檢查
	netCheck = false,
	// 用戶是否存在
	userExist = false,
	// 推薦是否有效
	recommendedEffective = {
		effective: true,
		// 推薦無效原因
		reason: ""
	},
	web3 = window.web3,
	BN = BigNumber.clone(),
	abkContract;

window.addEventListener('load', function() {
	/**
	 * 檢查瀏覽器時候安裝web3
	 */
	var checkNet = function() {
		if (isStart) {
			return
		}
		console.log("init web3...");
		if (window.ethereum) {
			// window.ethereum.enable().then(function() {
			// }).catch()
			web3 = window.web3 = new Web3(window.ethereum);
			isStart = true;
			handlerWeb3(window.web3);
		} else if (window.web3) {
			web3 = window.web3 = new Web3(window.web3.currentProvider);
			isStart = true;
			handlerWeb3(window.web3)
		} else if (!isCheckInterval) {
			errWeb3()
		}
	};

	/**
	 * 鏈接web3
	 * @param {Object} web3
	 */
	var handlerWeb3 = function(web3) {
		try{
			abkContract = new web3.eth.Contract(abkAbi, abkAddress);
		}catch(e){
			console.log(e);
		}
		web3.eth.net.getId(function(err, netId) {
			console.log('netId', netId);
			if (netId != gnetId) {
				if ((gnetId == 3 || gnetId == 4) && !isCheckInterval) {
					alert('這是壹個測試，請使用ropsten測試網！');
				} else if (gnetId == 1 && !isCheckInterval) {
					alert('請使用正式以太坊主網！');
				} else if (!isCheckInterval) {
					alert('請使用自定义网络！');
				}
			} else {
				netCheck = true;
				checkLogin();
			}
		})

	};
	/**
	 * 檢查是否登錄並獲取用戶賬號
	 */
	var checkLogin = function() {
		var accountInterval = setInterval(function() {
			web3.eth.getAccounts(function(err, accounts) {
				if (err) {
					console.log(err);
					return
				}
				if (accounts.length == 0 && userAccount !== "") {
					window.location.reload();
					return
				}
				if (accounts.length == 0) {
					return
				}
				if (userAccount != accounts[0]) {
					userAccount = accounts[0];
					window.location.reload();
					console.log("account change, start bat updateData!");
				}
			})
		}, 1000)
		web3.eth.getAccounts().then(function(accounts) {
			if (accounts.length == 0) {
				if (!isCheckInterval) {
					errLogin();
				}
				throw new Error("用戶未登錄");
			}
			userAccount = accounts[0];
			if (!userAccount || userAccount == "") {
				throw new Error("用戶未登錄");
			}
			
			return checkBought();
		}).then(function(exist) {
			// 如果買入過,查詢我的收益
			if (exist) {
				userExist = true;
			}

			initData();
		}).catch(function(err) {
			console.log(err);
		})
	};
	
	
	var initData = function() {
		if (userExist) {
			updateIntiveLink();
			getRelation();
			// 我的收益數據查詢
			showSettlementRevenueCall();
			showRecommendedRewardCall();
			showPrizePoolIncomeCall();
			showNextTimeDifferenceInEarningsCall();
			showStillOutOfTheGameCall();
			showUnsettledProjectedEarningsCall();
			showMyPerformanceGainsCall();
			showUndrawnCoinsCall();
		}
		checkRecommander();
		getGameStatuCall();
		// 統計數據查詢
		showBigPoolRoundCall();
		showLittePoolRoundCall();
		showLittePoolIncomeCall();
		showBigPoolIncomeCall();
		showTotalInvestedCall();
		showTotalRecommendedCall();
		showTeamCall();
		showAmbassadorCall();
		showTotalSettledCall();
		showLittePoolNextTime();
		showBigPoolNextTime();
	}

	/**
	 * 生成推薦鏈接
	 */
	var updateIntiveLink = function() {
		var url = location.href;
		if (url.indexOf("?") != -1) {
			url = url.split("?")[0];
		}
		if (userAccount && $("#invite-link").html().trim() === "--") {
			$("#invite-link").html(url + '?r=' + userAccount).addClass("text-warning");
		}
	};

	// 獲取推薦人
	var getRecomander = function() {
		var reg = new RegExp("(^|&)r=([^&]*)(&|$)");
		var r = window.location.search.substr(1).match(reg);
		if (r != null) {
			return unescape(r[2])
		}
		return null
	};
	
	var recommander = getRecomander();

	// 校驗推薦人
	var checkRecommander = function() {
		// 未携帶推薦人,可以進行無推薦購買
		if (!recommander) {
			return
		}
		
		var $willRecommander = $('.will-reg-recommander'),
			showStr = recommander.length > 15 ? recommander.substring(0, 10) + "..." + recommander.substr(-5) : recommander;
		
		// 如果用戶已經購買過,則推薦鏈接無效,可以進行無推薦購買
		if (userExist) {
			$('.will-reg-recommander-con').removeClass('hidden');
			$willRecommander.html("<span class='text-danger'> 已經推薦客戶!  </span>");
			return
		}
		
		if (abkContract) {
			recommendedEffective.effective = false;
			$('.will-reg-recommander-con').removeClass('hidden');
			try{
				abkContract.methods.refer_valid_check(recommander).call({from: userAccount}, function(error, result) {
					if (error) {
						$willRecommander.html("<span class='text-danger'> 錯誤!  </span>");
						return
					}
					if (!result.result) {
						recommendedEffective.reason = result.reason;
						$willRecommander.html("<span class='text-danger'>" + showStr +
							"<span style='font-size:12px;'>&nbsp;(" + recommendedEffective.reason + ")</span>" + "</span>");
						return
					}
					
					recommendedEffective.effective = true;
					$willRecommander.html("<span class='text-success'>" + showStr + "</span>");
				})
			}catch(e){
				$willRecommander.html("<span class='text-danger'>" + showStr +
					"<span style='font-size:12px;'>&nbsp;(推薦地址錯誤!)</span>" + "</span>");
			}
		}
	};
	
	// 查詢用戶是否買入過
	var checkBought = function() {
		return new Promise(function(resolve, reject) {
			abkContract.methods.showPersonExist().call({from: userAccount}, function(err, result) {
				if (err) {
					console.log(err);
					reject(err);
				}
				resolve(result);
			});
		})
	}
	
	// 檢查是否擁有購買資格
	var checkBuy = function() {
		return new Promise(function(resolve, reject) {
			// 如果用戶已經注冊過,判斷是否出局
			// 已出局才能再次入局
			if (userExist) {
				abkContract.methods.showPersonIsOut().call({from: userAccount}).then(function(result) {
					// 未出具,無購買資格
					if (!result) {
						alert("您尚未出局!");
						throw new Error("User not out yet");
					}
					resolve();
				}).catch(function(error) {
					console.log(error);
					reject();
				})
			} else {
				// 檢查是否擁有購買資格
				abkContract.methods.can_reg_check().call({from: userAccount}).then(function(result) {
					console.log(result);
					// 無購買資格
					if (!result.result) {
						alert(result.reason);
						throw new Error(result.reason);
					}
					resolve();
				}).catch(function(error) {
					console.log(error);
					reject(error);
				})
			}
		});
	}
	
	// 用戶首次購買-不携帶推薦
	var buy = function(etherValue) {
		abkContract.methods.reg().send({
			from: userAccount,
			value: etherValue,
			gas: 1000000
		}, function(err) {
			if (err) {
				console.log(err);
				alert("發送失敗!");
				return
			}
			alert("發送成功!", "success", 2, function() {
				if (recommander) {
					location.href = location.href.split("?")[0];
				} else {
					location.reload();
				}
			});
		})
	};
	
	// 用戶首次購買-携帶推薦
	var recommanderBuy = function(etherValue) {
		abkContract.methods.reg(recommander).send({
			from: userAccount,
			value: etherValue,
			gas: 1000000
		}, function(err) {
			if (err) {
				console.log(err);
				alert("發送失敗!");
				return
			}
			alert("發送成功!", "success", 2, function() {
				location.href = location.href.split("?")[0];
			});
		})
	}
	
	// 用户再次入局
	var reenter = function(etherValue) {
		abkContract.methods.reenter().send({
			from: userAccount,
			value: etherValue,
			gas: 1000000
		}, function(err) {
			if (err) {
				console.log(err);
				alert("發送失敗!");
				return
			}
			alert("發送成功!", "success", 2, function() {
				location.href = location.href.split("?")[0];
			});
		})
	}
	
	// 用户提幣
	var personWithdraw = function(etherValue) {
		abkContract.methods.personWithdraw(etherValue).send({
			from: userAccount,
			gas: 1000000
		}, function(err) {
			if (err) {
				console.log(err);
				alert("提現收益失敗!");
				return
			}
			alert("提現收益成功!", "success", 2, function() {
				location.reload();
			});
		})
	};
	
	// 查詢游戲狀態
	var getGameStatuCall = function() {
		abkContract.methods.gameStatu().call({from: userAccount}).then(function(err, gameStatu) {
			if (err) {
				console.log(err);
				return
			}
			if (!gameStatu) {
				$('.section-banner').addClass('mongolia');
				$('#sendEthBtn').prop('disabled');
			}
			return abkContract.methods.gameOverTime().call({from: userAccount})
		}).then(function(err, result) {
			if (err) {
				console.log(err);
				return
			}
			if (result) {
				$("#restart-time").html(moment(result, 'X').add(3, 'days').format('YYYY年MM月DD日 HH:mm:ss'));
			}
		}).catch(function(error) {
			console.log(error);
		});
	};
	
	// 個人收益 查詢已結算分紅收益
	var showSettlementRevenueCall = function() {
		abkContract.methods.showPersonDividentEarn().call({from: userAccount}, function(err, result) {
			if (err) {
				console.log(err);
				return
			}
			var resultWei = web3.utils.fromWei(BN(result).toFixed(), "ether");
			$("#settlementRevenue").html(BN(resultWei).toFixed(6, 1));
		});
	};
	// 個人收益 查詢推薦獎勵
	var showRecommendedRewardCall = function(err, result) {
		abkContract.methods.showPersonReferrerBonus().call({from: userAccount}, function(err, result) {
			if (err) {
				console.log(err);
				return
			}
			var resultWei = web3.utils.fromWei(BN(result).toFixed(), "ether");
			$("#recommendedReward").html(BN(resultWei).toFixed(6, 1));
		});
	};
	// 個人收益 查詢獎池收益
	var showPrizePoolIncomeCall = function(err, result) {
		abkContract.methods.showPersonPoolEarn().call({from: userAccount}, function(err, result) {
			if (err) {
				console.log(err);
				return
			}
			var resultWei = web3.utils.fromWei(BN(result).toFixed(), "ether");
			$("#prizePoolIncomeCall").html(BN(resultWei).toFixed(6, 1));
		});
	};
	// 個人收益 查詢下次分紅收益時間差
	var showNextTimeDifferenceInEarningsCall = function(err, result) {
		var micro_second, startMoment, endMoment,
			$nextTimeDifferenceInEarnings = $("#nextTimeDifferenceInEarnings");
		
		abkContract.methods.showDividentNextTime().call({from: userAccount}).then(function(result) {
			endMoment = moment(result, 'X');
			return abkContract.methods.showNowTime().call({from: userAccount});
		}).then(function(result) {
			startMoment = moment(result, 'X');
			micro_second = moment.duration(endMoment - startMoment);
			
			if (micro_second.as('ms') <= 0) {
				$nextTimeDifferenceInEarnings.html(timeDiffFormate(0, undefined));
				return
			}
			
			$nextTimeDifferenceInEarnings.html(timeDiffFormate(micro_second.as('ms'), undefined));
			var interval = setInterval(function() {
				if (micro_second.as('ms') <= 0) {
					$nextTimeDifferenceInEarnings.html(timeDiffFormate(0, undefined));
					clearInterval(interval);
					return
				}
				micro_second.subtract(1, 'seconds');
				$nextTimeDifferenceInEarnings.html(timeDiffFormate(micro_second.as('ms'), undefined));
			}, 1000);
		}).catch(function(e) {
			console.log(e);
		});
	};
	// 個人收益,查詢幾倍動靜出局還差
	var showStillOutOfTheGameCall = function(err, result) {
		abkContract.methods.showOutDifference().call({from: userAccount}, function(err, result) {
			if (err) {
				console.log(err);
				return
			}
			$("#stillOutOfTheGameRate").html(result.rate + " ");
			var resultWei = web3.utils.fromWei(BN(result.difference).toFixed(), "ether");
			$("#stillOutOfTheGame").html(BN(resultWei).toFixed(6, 1));
		});
	};
	// 個人收益 查詢未結算預計收益
	var showUnsettledProjectedEarningsCall = function(err, result) {
		abkContract.methods.showPredictEarn().call({from: userAccount}, function(err, result) {
			if (err) {
				console.log(err);
				return
			}
			var minWei = web3.utils.fromWei(BN(result.min).toFixed(), "ether"),
				maxWei = web3.utils.fromWei(BN(result.max).toFixed(), "ether");
			$("#unsettledProjectedEarnings").html(BN(minWei).toFixed(6, 1) + "-" + BN(maxWei).toFixed(6, 1));
		});
	};
	// 個人收益 查詢我的業績收益
	var showMyPerformanceGainsCall = function(err, result) {
		abkContract.methods.showPersonBonums().call({from: userAccount}, function(err, result) {
			if (err) {
				console.log(err);
				return
			}
			var resultWei = web3.utils.fromWei(BN(result).toFixed(), "ether");
			$("#myPerformanceGains").html(BN(resultWei).toFixed(6, 1));
		});
	};
	// 個人收益 查詢未提幣數量
	var showUndrawnCoinsCall = function(err, result) {
		abkContract.methods.showPersonUnwithdraw().call({from: userAccount}, function(err, result) {
			if (err) {
				console.log(err);
				return
			}
			var resultWei = web3.utils.fromWei(BN(result).toFixed(), "ether");
			$("#undrawnCoins").html(BN(resultWei).toFixed(6, 1));
		});
	};
	
	var getRelation = function() {
		abkContract.methods.showRelation().call({from: userAccount}, function(err, result) {
			if (err) {
				console.log(err);
				return
			}
			if (result.referrer !== "0x0000000000000000000000000000000000000000") {
				$("#relation-referrer").html(result.referrer).addClass("text-warning");
			}
			$("#relation-num").html(result.num).addClass("text-warning");
		});
	}

	// 數據統計 已進入的總資金
	var showTotalInvestedCall = function() {
		abkContract.methods.showTotalPay().call({from: userAccount}, function(err, result) {
			if (err) {
				console.log(err);
				return
			}
			var resultWei = web3.utils.fromWei(BN(result).toFixed(), "ether");
			$("#totalInvested").html(BN(resultWei).toFixed(6, 1));
		});
	}
	// 數據統計 縂已結算分紅收益
	var showTotalSettledCall = function() {
		abkContract.methods.showTotalWiethdraw().call({from: userAccount}, function(err, result) {
			if (err) {
				console.log(err);
				return
			}
			var resultWei = web3.utils.fromWei(BN(result).toFixed(), "ether");
			$("#totalSettled").html(BN(resultWei).toFixed(6, 1));
		});
	}
	// 數據統計 總的推薦收益
	var showTotalRecommendedCall = function() {
		abkContract.methods.showReferrerBonus().call({from: userAccount}, function(err, result) {
			if (err) {
				console.log(err);
				return
			}
			var resultWei = web3.utils.fromWei(BN(result).toFixed(), "ether");
			$("#totalRecommended").html(BN(resultWei).toFixed(6, 1));
		});
	}
	// 數據統計 團隊
	var showTeamCall = function() {
		abkContract.methods.showPlatformBonus().call({from: userAccount}, function(err, result) {
			if (err) {
				console.log(err);
				return
			}
			var resultWei = web3.utils.fromWei(BN(result).toFixed(), "ether");
			$("#team").html(BN(resultWei).toFixed(6, 1));
		});
	}
	// 數據統計 大使
	var showAmbassadorCall = function() {
		abkContract.methods.showAmbassadorBonus().call({from: userAccount}, function(err, result) {
			if (err) {
				console.log(err);
				return
			}
			var resultWei = web3.utils.fromWei(BN(result).toFixed(), "ether");
			$("#ambassador").html(BN(resultWei).toFixed(6, 1));
		});
	}
	
	// 數據統計 小獎池收益
	var showLittePoolIncomeCall = function() {
		abkContract.methods.showLittePool().call({from: userAccount}, function(err, result) {
			if (err) {
				console.log(err);
				return
			}
			var resultWei = web3.utils.fromWei(BN(result).toFixed(), "ether");
			$("#small-pot-eth, #smallPot").html(BN(resultWei).toFixed(6, 1));
		});
	}
	// 數據統計 大獎池收益
	var showBigPoolIncomeCall = function() {
		abkContract.methods.showBigPool().call({from: userAccount}, function(err, result) {
			if (err) {
				console.log(err);
				return
			}
			var resultWei = web3.utils.fromWei(BN(result).toFixed(), "ether");
			$("#big-pot-eth, #bigPot").html(BN(resultWei).toFixed(6, 1));
		});
	}
	
	// 數據統計 小獎池回合
	var showLittePoolRoundCall = function() {
		abkContract.methods.showLittleRound().call({from: userAccount}, function(err, result) {
			if (err) {
				return
			}
			$("#small-pot-round").html(result);
		});
	}
	// 數據統計 大獎池回合
	var showBigPoolRoundCall = function() {
		abkContract.methods.showBigRound().call({from: userAccount}, function(err, result) {
			if (err) {
				console.log(err);
				return
			}
			$("#big-pot-round").html(result);
		});
	}
	
	// 數據統計 小堅持下次收益時間 倒計時
	var showLittePoolNextTime = function() {
		var micro_second, startMoment, endMoment,
			$littlePoolTime = $(".downBox.little-pool .time");
		
		abkContract.methods.showDividentNextTime().call({from: userAccount}).then(function(result) {
			endMoment = moment(result, 'X');
			return abkContract.methods.showNowTime().call({from: userAccount});
		}).then(function(result) {
			startMoment = moment(result, 'X');
			micro_second = moment.duration(endMoment - startMoment);
			
			if (micro_second.as('ms') <= 0) {
				$littlePoolTime.html(timeDiffFormate(0, undefined));
				return
			}
			
			$littlePoolTime.html(timeDiffFormate(micro_second.as('ms'), undefined));
			var interval = setInterval(function() {
				if (micro_second.as('ms') <= 0) {
					$littlePoolTime.html(timeDiffFormate(0, undefined));
					clearInterval(interval);
					return
				}
				micro_second.subtract(1, 'seconds');
				$littlePoolTime.html(timeDiffFormate(micro_second.as('ms'), undefined));
			}, 1000);
		}).catch(function(e) {
			console.log(e);
		});
	}
	// 數據統計 大堅持下次收益時間 倒計時
	var showBigPoolNextTime = function() {
		var micro_second, startMoment, endMoment,
			$bigPoolTime = $(".downBox.big-pool .time");

		abkContract.methods.showPoolTime().call({from: userAccount}).then(function(result) {
			endMoment = moment(result, 'X');
			return abkContract.methods.showNowTime().call({from: userAccount});
		}).then(function(result) {
			startMoment = moment(result, 'X');
			micro_second = moment.duration(endMoment - startMoment);

			if (micro_second.as('ms') <= 0) {
				$bigPoolTime.html(timeDiffFormate(0, undefined));
				return
			}
			
			$bigPoolTime.html(timeDiffFormate(micro_second.as('ms'), undefined));
			var interval = setInterval(function() {
				if (micro_second.as('ms') <= 0) {
					$bigPoolTime.html(timeDiffFormate(0, undefined));
					clearInterval(interval);
					return
				}
				micro_second.subtract(1, 'seconds');
				$bigPoolTime.html(timeDiffFormate(micro_second.as('ms'), undefined));
			}, 1000);
		}).catch(function(e) {
			console.log(e);
		});;
	}
	
	// 按鈕操作開始前的檢查
	var checkAll = function() {
		if (!web3) {
			errWeb3();
			return false;
		}
		if (!netCheck) {
			errNet();
			return false;
		}
		if (!userAccount || userAccount == "") {
			errLogin();
			return false;
		}
		return true;
	};

	var errWeb3 = function() {
		alert(
			"對於Chrome、Firefox請下載 <a style='color:#fcd21c;font-size:18px;' href='https://metamask.io/' data-spop='close'>metamask</a> 或 手機端下載 <a style='color:#fcd21c;font-size:18px;' data-spop='close' href='https://trustwalletapp.com/'>trustwallet</a> ！"
		)
	};

	var errNet = function() {
		alert("請選擇正確的以太網絡！")
	};

	var errLogin = function() {
		alert('請先登錄 Metamask 或 trustwallet！');
	};

	var init = function() {
		$("#copyLinkBtn").click(function() {
			try{
				const range = document.createRange();
		        range.selectNode(document.getElementById('invite-link'));
		
		        const selection = window.getSelection();
		        if(selection.rangeCount > 0) selection.removeAllRanges();
		        selection.addRange(range);
		        var tag = document.execCommand('copy');
		        
		        if (tag) {
					// 複製完成后清除選中區域
			        window.getSelection().removeAllRanges();
					alert("複製成功!", "success")
				}
			}catch(e){
				alert("該瀏覽器不支持複製!");
			}
	        
		})

		$('#sendEthBtn').click(function() {
			if (!checkAll()) {
				return
			}
			
			// 檢驗推薦鏈接
			// if (recommander && !recommendedEffective.effective) {
			// 	alert(recommendedEffective.reason);
			// 	return
			// }
			
			var reg = /^\+?[1-9][0-9]*$/,
				$sendEthInput = $('#sendEthInput');
			var value = $sendEthInput.val();
			
			if (!reg.test(value)) {
				alert('門票單位 1 eth');
				return
			}
			
			// 檢驗用戶是否擁有購買資格
			checkBuy().then(function() {
				// 用戶已存在,再次入局
				if (userExist) {
					// 用户确认再次购买
					alertify.dialog('confirm').set({
						transition: "zoom",
						title: "警告",
						message: "確認您的收益已提取完畢,否則再次購買后將清空您的所有收益?",
						onok: function(){
							reenter(web3.utils.toWei(value, 'ether'));
						},
						oncancel: function() {
							console.log("User cancel incoming");
						}
					}).show();
				} else if (recommander && recommendedEffective.effective) {  // 首次購買,携帶了推薦鏈接,并且推薦鏈接有效
					recommanderBuy(web3.utils.toWei(value, 'ether'))
				} else {  // 首次購買
					buy(web3.utils.toWei(value, 'ether'))
				}
			}).catch(function(e) {
				console.log(e);
			});
		})
		
		$("#withdraw-income").click(function() {
			if (!checkAll()) {
				return
			}

			var value = $("#undrawnCoins").html();
			var valueBig = new BigNumber(value);
			if (valueBig.comparedTo(0) !== 1) {
				alert("沒有收益可以提現");
				return
			}
			alertify.dialog('confirm').set({
				transition: "zoom",
				title: "提現收益",
				message: "確認提現  "+ value +" ETH  收益?",
				onok: function(){
					personWithdraw(web3.utils.toWei(value, 'ether'));
				}
			}).show();
		})

		checkNet();

		if (!abkContract) {
			return
		}
		setInterval(function() {
			console.log('check net...');
			isCheckInterval = true;
			checkNet();
		}, 3000);
	};
	init();
})
